import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import './styles.css';
import { DataEntryTextContainer, DataEntryTextFooter, DataEntryTextInput, DataEntryTextTitle } from './styles';
import PrimaryButton from '../../../../components/PrimaryButton';
import TextError from '../../../../components/TextError';

export default function DataEntryText({ onSubmit }) {
	const [value, setValue] = useState();
	const [error, setError] = useState('');

	useEffect(() => {
		if (error) {
			setError('');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const open = () => {
		let jsonData;
		try {
			jsonData = JSON.parse(value);
		} catch (err) {
			jsonData = null;
		}

		if (jsonData) {
			onSubmit(jsonData);
			return;
		}

		setError('Insira um texto válido no formato JSON');
	};

	const cancel = () => {
		setValue('');
	};

	return (
		<DataEntryTextContainer>
			<DataEntryTextTitle>Digite ou cole um texto em formato JSON válido</DataEntryTextTitle>

			<DataEntryTextInput multiline value={value} onChangeText={setValue} />
			<TextError>{error}</TextError>

			<DataEntryTextFooter>
				{value ? <PrimaryButton title='Limpar' mode='outline' onPress={cancel} /> : null}
				<View style={{ width: 10 }} />
				<PrimaryButton title='Abrir' onPress={open} />
			</DataEntryTextFooter>
		</DataEntryTextContainer>
	);
}
