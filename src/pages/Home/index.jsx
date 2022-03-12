import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { FaFileAlt } from 'react-icons/fa';
import { FiType } from 'react-icons/fi';
import { BsServer } from 'react-icons/bs';

import { HomeContainer, HomeDataEntryContainer, HomeDataEntryHeader, HomeDataEntryTitle } from './styles';
import DataEntryText from './components/DataEntryText';
import DataEntryFile from './components/DataEntryFile';
import DataEntryUrl from './components/DataEntryUrl';
import Colors from '../../themes/Colors';

export default function Home({ navigation }) {
	const [optionOpened, setOptionOpened] = useState(0);

	const onSubmit = (data, info) => {
		navigation.navigate('DataExplorer', { data, info });
	};

	return (
		<HomeContainer>
			<HomeDataEntryContainer>
				<HomeDataEntryHeader onPress={() => setOptionOpened(0)}>
					<HomeDataEntryTitle>Digitar/Colar texto</HomeDataEntryTitle>
					<FiType style={{ color: Colors.white }} />
				</HomeDataEntryHeader>
				<Collapse isOpened={optionOpened === 0}>
					<DataEntryText onSubmit={onSubmit} />
				</Collapse>

				<HomeDataEntryHeader onPress={() => setOptionOpened(1)}>
					<HomeDataEntryTitle>File</HomeDataEntryTitle>
					<FaFileAlt style={{ color: Colors.white }} />
				</HomeDataEntryHeader>
				<Collapse isOpened={optionOpened === 1}>
					<DataEntryFile onSubmit={onSubmit} />
				</Collapse>

				<HomeDataEntryHeader onPress={() => setOptionOpened(2)}>
					<HomeDataEntryTitle>Url</HomeDataEntryTitle>
					<BsServer style={{ color: Colors.white }} />
				</HomeDataEntryHeader>
				<Collapse isOpened={optionOpened === 2}>
					<DataEntryUrl onSubmit={onSubmit} />
				</Collapse>
			</HomeDataEntryContainer>
		</HomeContainer>
	);
}

/* 
0-480
480-768
768-1280 */
