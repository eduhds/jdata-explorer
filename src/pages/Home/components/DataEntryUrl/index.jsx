import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import './styles.css';
import {
	DataEntryUrlContainer,
	DataEntryUrlFooter,
	DataEntryUrlInput,
	DataEntryUrlMethodRow,
	DataEntryUrlMethodText,
	DataEntryUrlMethodButton,
	DataEntryUrlTitle
} from './styles';
import PrimaryButton from '../../../../components/PrimaryButton';
import TextError from '../../../../components/TextError';

export default function DataEntryUrl({ onSubmit }) {
	const [value, setValue] = useState();
	const [error, setError] = useState('');
	const [method, setMethod] = useState('GET');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (error) {
			setError('');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const open = async () => {
		if (value?.startsWith('https://')) {
			setLoading(true);
			try {
				const data = await fetch(value, {
					method,
					headers: {
						Accept: 'application/json'
					}
				});
				const jsonData = await data.json();

				if (jsonData) {
					onSubmit(jsonData);
				}
			} catch (err) {
				setError(`Falha ao carregar dados: ${err}`);
			} finally {
				setLoading(false);
			}
			return;
		}

		setError('Insira uma URL válida');
	};

	const cancel = () => {
		setValue('');
	};

	return (
		<DataEntryUrlContainer>
			<DataEntryUrlTitle>
				Insira uma URL de servidor/API que responde dados em JSON (não deve haver restrições de acesso/autenticação, a
				conexão deve ser HTTPS)
			</DataEntryUrlTitle>

			<DataEntryUrlMethodRow>
				<DataEntryUrlInput value={value} onChangeText={setValue} />
				<DataEntryUrlMethodButton selected={method === METHODE_GET} onPress={() => setMethod(METHODE_GET)}>
					<DataEntryUrlMethodText>{METHODE_GET}</DataEntryUrlMethodText>
				</DataEntryUrlMethodButton>

				<DataEntryUrlMethodButton selected={method === METHODE_POST} onPress={() => setMethod(METHODE_POST)}>
					<DataEntryUrlMethodText>{METHODE_POST}</DataEntryUrlMethodText>
				</DataEntryUrlMethodButton>
			</DataEntryUrlMethodRow>
			<TextError>{error}</TextError>

			<DataEntryUrlFooter>
				{value ? <PrimaryButton title='Limpar' mode='outline' onPress={cancel} /> : null}
				<View style={{ width: 10 }} />
				<PrimaryButton title='Abrir' onPress={open} loading={loading} />
			</DataEntryUrlFooter>
		</DataEntryUrlContainer>
	);
}

const METHODE_GET = 'GET';
const METHODE_POST = 'POST';
