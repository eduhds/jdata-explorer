import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, TouchableOpacity, Button, View } from 'react-native';
import { FaCaretRight, FaCopy } from 'react-icons/fa';
import { VscJson } from 'react-icons/vsc';
import { BiBracket, BiSearch, BiTable } from 'react-icons/bi';
import { RiFileEditFill } from 'react-icons/ri';
import { IoIosCloseCircle } from 'react-icons/io';
import { BsListNested } from 'react-icons/bs';

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
	DataExplorerObjEmptyText,
	DataExplorerEditValueText,
	DataExplorerEditValueRow,
	DataExplorerColHeaderSearchRow,
	ObjAsTableContainer,
	ObjAsTableHeader,
	ObjAsTableTitle,
	ObjAsTableBody,
	ObjAsTableCelKey,
	ObjAsTableCelKeyText,
	ObjAsTableCelValue,
	ObjAsTableCelValueText,
	ObjAsTableCelKeyRow
} from './styles';
import Colors from '../../themes/Colors';
import JDExMethods from '../../helpers/JDExMethods';
import ArrayAsTable from './components/ArrayAsTable';
import RenderTypeIcon from './components/RenderTypeIcon';

export default function DataExplorer({ navigation, route }) {
	const mainContainerRef = useRef();
	const [data, setData] = useState(route.params.data);
	const [changes, setChanges] = useState([]);

	const updateData = (keyPath = '', newValue, oldValue) => {
		try {
			let obj = data;
			let keys = keyPath.slice(1, keyPath.length - 1).split('][');
			let isString = typeof newValue === 'string';

			const left = `obj["${keys.join('"]["')}"]`;
			const right = `${isString ? '"' : ''}${newValue}${isString ? '"' : ''}`;
			const undo = `${isString ? '"' : ''}${oldValue}${isString ? '"' : ''}`;
			// eslint-disable-next-line no-eval
			eval(`${left} = ${right};`);

			setData(obj);
			setChanges([[left, undo]]);
		} catch (err) {
			console.log('[ERROR:updateData]', err);
		}
	};

	return (
		<DataExplorerContainer>
			<ToolBar
				info={route.params.info}
				hasChanges={changes.length > 0}
				onSave={() => {
					try {
						const dataStr = JSON.stringify(data);
						const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
						const exportFileDefaultName = 'data.json';

						const linkElement = document.createElement('a');
						linkElement.setAttribute('href', dataUri);
						linkElement.setAttribute('download', exportFileDefaultName);
						linkElement.click();
					} catch (err) {
						console.log('[ERROR:onSave', err);
					}
				}}
				onUndo={() => {
					try {
						const undo = window.confirm('Desfazer alterações?');
						if (undo) {
							let obj = data;
							changes.forEach(c => {
								const [left, right] = c;
								// eslint-disable-next-line no-eval
								eval(`${left} = ${right};`);
							});
							setData(obj);
							setChanges([]);
						}
					} catch (err) {
						console.log('[ERROR:onUndo', err);
					}
				}}
			/>

			<DataExplorerContent>
				<ScrollView horizontal ref={mainContainerRef}>
					<DataExplorerTable>
						<RenderData obj={data} updateData={updateData} />
					</DataExplorerTable>
				</ScrollView>
			</DataExplorerContent>
		</DataExplorerContainer>
	);
}

function RenderData({ obj, path = '', updateData }) {
	const [visible, setVisible] = useState(undefined);
	const [searchKey, setSearchKey] = useState('');
	const [editValue, setEditValue] = useState(undefined);
	const [viewAsTable, setViewAsTable] = useState(false);

	const keys = Object.keys(obj).filter(k => (searchKey ? k.search(new RegExp(searchKey, 'i')) !== -1 : true));
	const isRegularObj = JDExMethods.isRegularObject(obj);
	const isRegularArray = JDExMethods.isRegularObjectArray(obj);

	useEffect(() => {
		if (visible) setVisible(undefined);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchKey, viewAsTable]);

	return (
		<DataExplorerRow>
			{/* KEYS */}
			<DataExplorerCol>
				<DataExplorerColHeader>
					<DataExplorerColHeaderSearchRow inactive={viewAsTable}>
						<BiSearch style={{ fontSize: 14, color: viewAsTable ? Colors.inactive : Colors.primary3 }} />
						<DataExplorerColInputSearch editable={!viewAsTable} value={searchKey} onChangeText={setSearchKey} />
						{searchKey !== '' && (
							<TouchableOpacity onPress={() => setSearchKey('')}>
								<IoIosCloseCircle style={{ fontSize: 14, color: Colors.danger }} />
							</TouchableOpacity>
						)}
					</DataExplorerColHeaderSearchRow>
					{(isRegularObj || isRegularArray) && (
						<TouchableOpacity onPress={() => setViewAsTable(!viewAsTable)}>
							{viewAsTable ? (
								<BsListNested style={{ fontSize: 16, color: Colors.primary2 }} />
							) : (
								<BiTable style={{ fontSize: 16, color: Colors.primary2 }} />
							)}
						</TouchableOpacity>
					)}
				</DataExplorerColHeader>

				{!viewAsTable && (
					<DataExplorerColCountText>
						{keys.length || ''}
						{keys.length === 0 ? 'Nenhum item' : keys.length === 1 ? ' item' : ' itens'}
					</DataExplorerColCountText>
				)}

				<ScrollView>
					{!viewAsTable &&
						keys.map((key, index) => (
							<DataExplorerKeyView
								key={`dataexplorer-key-${key}-${index}`}
								selected={key === visible}
								onPress={() => {
									if (!visible) setVisible(key);
									else if (visible !== key) setVisible(key);
									else setVisible(undefined);
									if (editValue) setEditValue(undefined);
									if (viewAsTable) setViewAsTable(false);
								}}>
								<DataExplorerKeyRow>
									<RenderTypeIcon value={obj[key]} selected={key === visible} />
									<DataExplorerKeyText selected={key === visible}>{key}</DataExplorerKeyText>
								</DataExplorerKeyRow>

								<FaCaretRight style={{ color: key === visible ? Colors.white : Colors.primary2 }} />
							</DataExplorerKeyView>
						))}

					{viewAsTable && (
						<>
							{isRegularArray ? (
								<ArrayAsTable
									array={obj}
									title={(() => {
										const _path = path.slice(1, path.length - 1).split('][');
										return _path[_path.length - 1];
									})()}
								/>
							) : (
								<ObjAsTable
									obj={obj}
									title={(() => {
										const _path = path.slice(1, path.length - 1).split('][');
										return _path[_path.length - 1];
									})()}
								/>
							)}
						</>
					)}
				</ScrollView>
			</DataExplorerCol>

			{/* VALUES */}
			{visible && (
				<DataExplorerCol>
					{Object.entries(obj)
						.filter(([k]) => k === visible)
						.map(([, v]) => v)
						.map((value, index) => {
							const valuePath = `${path}[${visible}]`;

							if (value !== null && value !== undefined && typeof value === 'object') {
								if (Object.keys(value).length === 0) {
									return (
										<DataExplorerValueView key={`dataexplorer-value-${index}`}>
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
									<DataExplorerValueView key={`dataexplorer-value-${index}`}>
										<RenderData obj={value} path={valuePath} updateData={updateData} />
									</DataExplorerValueView>
								);
							}

							return (
								<DataExplorerValueView key={`dataexplorer-value-${index}`}>
									<ScrollView>
										<DataExplorerValueCard>
											<DataExplorerValueCardHeader>
												<DataExplorerValueCardTitle>
													{value === null ? 'null' : typeof value}
												</DataExplorerValueCardTitle>
												{['string', 'number'].includes(typeof value) && (
													<TouchableOpacity
														disabled={editValue !== undefined}
														onPress={() => setEditValue(value)}
														style={{ marginRight: 2 }}>
														<RiFileEditFill
															style={{ fontSize: 14, color: editValue ? Colors.inactive : Colors.primary2 }}
														/>
													</TouchableOpacity>
												)}
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
													{editValue !== undefined ? (
														<RenderEditValue
															value={value}
															onCancel={() => setEditValue(undefined)}
															onSave={editedValue => {
																setEditValue(undefined);
																updateData(valuePath, editedValue, value);
															}}
														/>
													) : (
														<RenderValue value={value} />
													)}
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

function RenderEditValue({ value, onCancel, onSave }) {
	const [valueEdited, setValueEdited] = useState(value);

	if (['string', 'number'].includes(typeof value)) {
		return (
			<>
				<DataExplorerEditValueText multiline autoFocus value={valueEdited} onChangeText={setValueEdited} />
				<DataExplorerEditValueRow>
					<Button title='Cancelar' color={Colors.danger} onPress={() => onCancel()} />
					<View style={{ width: 5 }} />
					<Button
						title='Salvar'
						color={Colors.success}
						disabled={valueEdited === value}
						onPress={() => onSave(valueEdited.trim())}
					/>
				</DataExplorerEditValueRow>
			</>
		);
	}

	return <DataExplorerValueText>{String(value)}</DataExplorerValueText>;
}

function ObjAsTable({ obj, title }) {
	return (
		<ObjAsTableContainer>
			<ObjAsTableHeader>
				<tr>
					<th colSpan={2}>
						<ObjAsTableTitle>{title}</ObjAsTableTitle>
					</th>
				</tr>
			</ObjAsTableHeader>
			<ObjAsTableBody>
				{Object.entries(obj).map(([key, value]) => (
					<tr key={`objastable-tr-${key}`}>
						<ObjAsTableCelKey>
							<ObjAsTableCelKeyRow>
								<RenderTypeIcon value={value} color={Colors.primary2} size={12} />
								<ObjAsTableCelKeyText>{key}</ObjAsTableCelKeyText>
							</ObjAsTableCelKeyRow>
						</ObjAsTableCelKey>
						<ObjAsTableCelValue>
							<ObjAsTableCelValueText>{String(value)}</ObjAsTableCelValueText>
						</ObjAsTableCelValue>
					</tr>
				))}
			</ObjAsTableBody>
		</ObjAsTableContainer>
	);
}
