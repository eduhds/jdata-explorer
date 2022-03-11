import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { FaCaretRight, FaCopy } from 'react-icons/fa';
import { VscJson } from 'react-icons/vsc';
import { BiBracket } from 'react-icons/bi';
import { FiType } from 'react-icons/fi';
import { AiOutlineNumber } from 'react-icons/ai';

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
	DataExplorerKeyRow
} from './styles';
import Colors from '../../themes/Colors';

export default function DataExplorer({ navigation, route }) {
	const [data, setData] = useState(route.params.data);

	return (
		<DataExplorerContainer>
			<ToolBar />

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

	return (
		<DataExplorerRow>
			<DataExplorerCol>
				{Object.keys(obj).map((key, index) => (
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
			</DataExplorerCol>

			{visible && (
				<DataExplorerCol>
					{Object.entries(obj)
						.filter(([k]) => k === visible)
						.map(([, v]) => v)
						.map(value => {
							if (typeof value === 'object') {
								return (
									<DataExplorerValueView>
										<RenderData obj={value} />
									</DataExplorerValueView>
								);
							}
							return (
								<DataExplorerValueView>
									<DataExplorerValueCard>
										<DataExplorerValueCardHeader>
											<DataExplorerValueCardTitle>{typeof value}</DataExplorerValueCardTitle>
											<TouchableOpacity
												onPress={() => {
													navigator.clipboard.writeText(value).then(
														() => alert('Valor copiado para a área de transferência!'),
														err => console.log(err)
													);
												}}>
												<FaCopy style={{ fontSize: 14, color: Colors.primary2 }} />
											</TouchableOpacity>
										</DataExplorerValueCardHeader>
										<DataExplorerValueCardBody>
											<DataExplorerValueText>{value}</DataExplorerValueText>
										</DataExplorerValueCardBody>
									</DataExplorerValueCard>
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
		case Array.isArray(value):
			return <BiBracket style={style} />;
		case typeof value === 'object':
			return <VscJson style={style} />;
		case typeof value === 'string':
			return <FiType style={style} />;
		case typeof value === 'number':
			return <AiOutlineNumber style={style} />;
		default:
			return null;
	}
}
