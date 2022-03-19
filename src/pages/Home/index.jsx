import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { FaFileAlt } from 'react-icons/fa';
import { FiType } from 'react-icons/fi';
import { BsServer, BsChevronRight, BsChevronDown } from 'react-icons/bs';

import { HomeContainer, HomeDataEntryContainer, HomeDataEntryHeader, HomeDataEntryTitle } from './styles';
import DataEntryText from './components/DataEntryText';
import DataEntryFile from './components/DataEntryFile';
import DataEntryUrl from './components/DataEntryUrl';
import Colors from '../../themes/Colors';

export default function Home({ navigation }) {
	const [optionOpened, setOptionOpened] = useState(0);

	const fromText = optionOpened === 0;
	const fromFile = optionOpened === 1;
	const fromUrl = optionOpened === 2;
	const chevronStyle = { fontSize: 18, color: Colors.white, marginRight: 10 };

	const onSubmit = (data, info) => {
		navigation.navigate('DataExplorer', { data, info });
	};

	return (
		<HomeContainer>
			<HomeDataEntryContainer>
				<HomeDataEntryHeader onPress={() => setOptionOpened(0)}>
					{fromText ? <BsChevronDown style={chevronStyle} /> : <BsChevronRight style={chevronStyle} />}
					<HomeDataEntryTitle>Digitar/Colar texto</HomeDataEntryTitle>
					<FiType style={{ color: Colors.white }} />
				</HomeDataEntryHeader>
				<Collapse isOpened={fromText}>
					<DataEntryText onSubmit={onSubmit} />
				</Collapse>

				<HomeDataEntryHeader onPress={() => setOptionOpened(1)}>
					{fromFile ? <BsChevronDown style={chevronStyle} /> : <BsChevronRight style={chevronStyle} />}
					<HomeDataEntryTitle>Arquivo JSON</HomeDataEntryTitle>
					<FaFileAlt style={{ color: Colors.white }} />
				</HomeDataEntryHeader>
				<Collapse isOpened={fromFile}>
					<DataEntryFile onSubmit={onSubmit} />
				</Collapse>

				<HomeDataEntryHeader onPress={() => setOptionOpened(2)}>
					{fromUrl ? <BsChevronDown style={chevronStyle} /> : <BsChevronRight style={chevronStyle} />}
					<HomeDataEntryTitle>URL de API/Servidor</HomeDataEntryTitle>
					<BsServer style={{ color: Colors.white }} />
				</HomeDataEntryHeader>
				<Collapse isOpened={fromUrl}>
					<DataEntryUrl onSubmit={onSubmit} />
				</Collapse>
			</HomeDataEntryContainer>
		</HomeContainer>
	);
}
