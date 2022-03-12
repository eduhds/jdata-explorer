import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { DataEntryFileContainer, DataEntryFileFooter, DataEntryFileTitle } from './styles';
import PrimaryButton from '../../../../components/PrimaryButton';
import TextError from '../../../../components/TextError';

export default function DataEntryFile({ onSubmit }) {
	const [value, setValue] = useState();
	const [error, setError] = useState('');
	const [metaData, setMetaData] = useState();

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
			onSubmit(jsonData, metaData);
			return;
		}

		setError('Selecione um arquivo .json');
	};

	const cancel = () => {
		setValue('');
		setMetaData(undefined);
		document.querySelector('#file-json').value = '';
	};

	return (
		<DataEntryFileContainer>
			<DataEntryFileTitle>Selecione um arquivo .json</DataEntryFileTitle>

			<input
				type='file'
				id='file-json'
				name='file-json'
				accept='.json'
				onChange={e => {
					e.preventDefault();
					setMetaData({
						source: 'file',
						name: e.target.files[0].name
					});
					e.target.files[0].text().then(setValue, err => {
						console.log(err);
						cancel();
					});
				}}
			/>
			<TextError>{error}</TextError>

			<DataEntryFileFooter>
				{value ? <PrimaryButton title='Remover' mode='outline' onPress={cancel} /> : null}
				<View style={{ width: 10 }} />
				<PrimaryButton title='Abrir' onPress={open} />
			</DataEntryFileFooter>
		</DataEntryFileContainer>
	);
}
