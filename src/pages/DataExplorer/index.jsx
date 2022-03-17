import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { FaCaretRight, FaCopy } from 'react-icons/fa';
import { VscJson } from 'react-icons/vsc';
import { BiBracket, BiSearch } from 'react-icons/bi';
import { FiType } from 'react-icons/fi';
import { AiOutlineNumber } from 'react-icons/ai';
import { RiCheckboxMultipleFill } from 'react-icons/ri';
import { IoRemoveCircleOutline } from 'react-icons/io5';
import { IoIosCloseCircle } from 'react-icons/io';

import ToolBar from './components/ToolBar';
import {
	DataExplorerCol,
	DataExplorerContainer,
	DataExplorerContent,
	DataExplorerKeyText,
	DataExplorerKeyView,
	DataExplorerRow,
	DataExplorerTable,
	DataExplorerValueText,
	DataExplorerValueCard,
	DataExplorerValueView,
	DataExplorerValueCardHeader,
	DataExplorerValueCardTitle,
	DataExplorerValueCardBody,
	DataExplorerKeyRow,
	DataExplorerColInputSearch,
	DataExplorerColHeader,
	DataExplorerColCountText,
	DataExplorerObjEmptyView,
	DataExplorerObjEmptyText
} from './styles';
import Colors from '../../themes/Colors';

export default function DataExplorer({ navigation, route }) {
	const [data, setData] = useState(route.params.data);

	return (
		<DataExplorerContainer>
			<ToolBar info={route.params.info} />

			<DataExplorerContent>
				<ScrollView horizontal>
					<DataExplorerTable>
						<RenderData obj={data} />
					</DataExplorerTable>
				</ScrollView>
			</DataExplorerContent>
		</DataExplorerContainer>
	);
}

function RenderData({ obj }) {
	const [visible, setVisible] = useState(undefined);
	const [searchKey, setSearchKey] = useState('');

	const keys = Object.keys(obj).filter(k => (searchKey ? k.search(new RegExp(searchKey, 'i')) !== -1 : true));

	useEffect(() => {
		if (visible) setVisible(undefined);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchKey]);

	return (
		<DataExplorerRow>
			<DataExplorerCol>
				<DataExplorerColHeader>
					<BiSearch style={{ fontSize: 14, color: Colors.primary3 }} />
					<DataExplorerColInputSearch value={searchKey} onChangeText={setSearchKey} />
					{searchKey !== '' && (
						<TouchableOpacity onPress={() => setSearchKey('')}>
							<IoIosCloseCircle style={{ fontSize: 14, color: Colors.danger }} />
						</TouchableOpacity>
					)}
				</DataExplorerColHeader>

				<DataExplorerColCountText>
					{keys.length || ''}
					{keys.length === 0 ? 'Nenhum item' : keys.length === 1 ? ' item' : ' itens'}
				</DataExplorerColCountText>

				<ScrollView>
					{keys.map((key, index) => (
						<DataExplorerKeyView
							key={`key-${key}-${index}`}
							selected={key === visible}
							onPress={() => {
								if (!visible) setVisible(key);
								else if (visible !== key) setVisible(key);
								else setVisible(undefined);
							}}>
							<DataExplorerKeyRow>
								<RenderIcon value={obj[key]} selected={key === visible} />
								<DataExplorerKeyText selected={key === visible}>{key}</DataExplorerKeyText>
							</DataExplorerKeyRow>

							<FaCaretRight style={{ color: key === visible ? Colors.white : Colors.primary2 }} />
						</DataExplorerKeyView>
					))}
				</ScrollView>
			</DataExplorerCol>

			{visible && (
				<DataExplorerCol>
					{Object.entries(obj)
						.filter(([k]) => k === visible)
						.map(([, v]) => v)
						.map(value => {
							if (value !== null && value !== undefined && typeof value === 'object') {
								if (Object.keys(value).length === 0) {
									return (
										<DataExplorerValueView>
											<DataExplorerObjEmptyView>
												{Array.isArray(value) ? (
													<BiBracket style={{ color: Colors.primary1, fontSize: 30 }} />
												) : (
													<VscJson style={{ color: Colors.primary1, fontSize: 30 }} />
												)}
												<DataExplorerObjEmptyText>{typeof value} vazio</DataExplorerObjEmptyText>
											</DataExplorerObjEmptyView>
										</DataExplorerValueView>
									);
								}
								return (
									<DataExplorerValueView>
										<RenderData obj={value} />
									</DataExplorerValueView>
								);
							}

							return (
								<DataExplorerValueView>
									<ScrollView>
										<DataExplorerValueCard>
											<DataExplorerValueCardHeader>
												<DataExplorerValueCardTitle>
													{value === null ? 'null' : typeof value}
												</DataExplorerValueCardTitle>
												{value !== '' && (
													<TouchableOpacity
														onPress={() => {
															navigator.clipboard.writeText(value).then(
																() => alert('Valor copiado para a área de transferência!'),
																err => console.log(err)
															);
														}}>
														<FaCopy style={{ fontSize: 14, color: Colors.primary2 }} />
													</TouchableOpacity>
												)}
											</DataExplorerValueCardHeader>
											<ScrollView>
												<DataExplorerValueCardBody>
													<RenderValue value={value} />
												</DataExplorerValueCardBody>
											</ScrollView>
										</DataExplorerValueCard>
									</ScrollView>
								</DataExplorerValueView>
							);
						})}
				</DataExplorerCol>
			)}
		</DataExplorerRow>
	);
}

function RenderIcon({ value, selected }) {
	const style = { fontSize: 14, color: selected ? Colors.white : Colors.primary2 };

	switch (true) {
		case value === null || value === undefined:
			return <IoRemoveCircleOutline style={style} />;
		case Array.isArray(value):
			return <BiBracket style={style} />;
		case typeof value === 'object':
			return <VscJson style={style} />;
		case typeof value === 'string':
			return <FiType style={style} />;
		case typeof value === 'number':
			return <AiOutlineNumber style={style} />;
		case typeof value === 'boolean':
			return <RiCheckboxMultipleFill style={style} />;
		default:
			return null;
	}
}

function RenderValue({ value }) {
	if (String(value).startsWith('http://') || String(value).startsWith('https://')) {
		return (
			<DataExplorerValueText>
				<a href={value} target='_blank'>
					{String(value)}
				</a>
			</DataExplorerValueText>
		);
	}

	return <DataExplorerValueText>{String(value)}</DataExplorerValueText>;
}
