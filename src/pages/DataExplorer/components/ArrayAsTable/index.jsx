import React from 'react';
import {} from 'react-native';

import {
	ArrayAsTableBody,
	ArrayAsTableCelValue,
	ArrayAsTableCelValueText,
	ArrayAsTableContainer,
	ArrayAsTableHeader,
	ArrayAsTableTitle
} from './styles';

export default function ArrayAsTable({ array, title }) {
	return (
		<ArrayAsTableContainer>
			<ArrayAsTableHeader>
				<tr>
					<th>
						<ArrayAsTableTitle>#</ArrayAsTableTitle>
					</th>
					{Object.keys(array[0]).map(k => (
						<th key={`arrayastable-th-${k}`}>
							<ArrayAsTableTitle>{k}</ArrayAsTableTitle>
						</th>
					))}
				</tr>
			</ArrayAsTableHeader>
			<ArrayAsTableBody>
				{Object.entries(array).map(([key, value]) => (
					<tr key={`arrayastable-tr-${key}`}>
						<ArrayAsTableCelValue inverse={key % 2 !== 0}>
							<ArrayAsTableCelValueText>{key}</ArrayAsTableCelValueText>
						</ArrayAsTableCelValue>
						{Object.values(value).map((item, index) => (
							<ArrayAsTableCelValue key={`arrayastable-td-${index}`} inverse={key % 2 !== 0}>
								<ArrayAsTableCelValueText>{String(item)}</ArrayAsTableCelValueText>
							</ArrayAsTableCelValue>
						))}
					</tr>
				))}
			</ArrayAsTableBody>
		</ArrayAsTableContainer>
	);
}
