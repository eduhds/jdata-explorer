import _styled from 'styled-components';
import styled from 'styled-components/native';

import Colors from '../../../../themes/Colors';

export const ArrayAsTableContainer = _styled.table`
  margin: 4px;
  border: 1px solid ${Colors.primary2};
  border-radius: 4px;
  max-width: 600px;
  border-spacing: 0px;
`;

export const ArrayAsTableHeader = _styled.thead`
  background-color: ${Colors.primary2};
`;

export const ArrayAsTableTitle = styled.Text`
  font-size: 14px;
  color: white;
  font-weight: bold;
  margin: 4px;
`;

export const ArrayAsTableBody = _styled.tbody`
`;

export const ArrayAsTableCelValue = _styled.td`
  background-color: ${({ inverse }) => (inverse ? Colors.primary4 : Colors.card)};
  padding: 5px;
  border-bottom-width: 0.5px;
  border-bottom-style: solid;
  border-bottom-color: ${Colors.primary2};
`;

export const ArrayAsTableCelValueText = styled.Text`
  font-size: 12px;
`;
