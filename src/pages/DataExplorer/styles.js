import styled from 'styled-components/native';
import _styled from 'styled-components';

import Colors from '../../themes/Colors';

export const DataExplorerContainer = styled.View`
  flex: 1;
`;

export const DataExplorerContent = styled.View`
  flex: 1;
`;

export const DataExplorerTable = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

export const DataExplorerRow = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const DataExplorerCol = styled.View`
  flex-direction: column;
  padding-left: 2px;
  padding-right: 2px;
`;

export const DataExplorerKeyView = styled.TouchableOpacity`
  background-color: ${({ selected }) => (selected ? Colors.primary1 : Colors.primary4)};
  border-radius: 2px;
  min-height: 25px;
  margin-bottom: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
`;

export const DataExplorerKeyRow = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const DataExplorerKeyText = styled.Text`
  color: ${({ selected }) => (selected ? Colors.white : Colors.primary2)};
  margin-left: 5px;
  margin-right: 10px;
`;

export const DataExplorerValueView = styled.View`
  flex: 1;
  border-left-width: 1px;
  border-left-color: ${Colors.primary1};
`;

export const DataExplorerValueCard = styled.View`
  border-radius: 2px;
  border-width: 0.5px;
  border-color: ${Colors.primary1};
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 15px;
  max-width: 600px;
  max-height: 400px;
`;

export const DataExplorerValueCardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.primary3};
  padding: 5px;
`;

export const DataExplorerValueCardBody = styled.View`
  background-color: ${Colors.card};
  padding: 5px;
`;

export const DataExplorerValueCardTitle = styled.Text`
  flex: 1;
  color: white;
  font-size: 12px;
  font-weight: bold;
  margin-right: 10px;
`;

export const DataExplorerValueText = styled.Text`
  font-size: 14px;
  color: ${Colors.text};
`;

export const DataExplorerColHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 2px;
`;

export const DataExplorerColHeaderSearchRow = styled.View`
  flex: 1;
  flex-direction: row;
  height: 25px;
  align-items: center;
  padding: 4px;
  border-bottom-width: 0.2px;
  border-bottom-color: ${({ inactive }) => (inactive ? Colors.inactive : Colors.primary3)};
`;

export const DataExplorerColInputSearch = styled.TextInput`
  flex: 1;
  color: ${Colors.primary2};
  padding-left: 4px;
`;

export const DataExplorerColCountText = styled.Text`
  color: ${Colors.text};
  margin-bottom: 5px;
  margin-left: 5px;
  font-size: 10px;
  font-style: italic;
`;

export const DataExplorerObjEmptyView = styled.View`
  margin-left: 10px;
  align-items: center;
`;

export const DataExplorerObjEmptyText = styled.Text`
  color: ${Colors.primary1};
  font-size: 14px;
  font-style: italic;
`;

export const DataExplorerEditValueText = styled.TextInput`
  flex: 1;
  min-height: 200px;
  min-width: 400px;
`;

export const DataExplorerEditValueRow = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  border-top-width: 1px;
  border-top-color: ${Colors.primary1};
  padding-top: 2px;
  margin-top: 4px;
`;

export const ObjAsTableContainer = _styled.table`
  margin: 4px;
  border: 1px solid ${Colors.primary2};
  border-radius: 4px;
  max-width: 600px;
  border-spacing: 0px;
`;

export const ObjAsTableHeader = _styled.thead`
  background-color: ${Colors.primary2};
`;

export const ObjAsTableTitle = styled.Text`
  font-size: 14px;
  color: white;
  font-weight: bold;
  margin: 4px;
`;

export const ObjAsTableBody = _styled.tbody`
`;

export const ObjAsTableCelKeyRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ObjAsTableCelKey = _styled.td`
  background-color: ${Colors.primary4};
  padding: 5px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${Colors.primary2};
  border-bottom-style: solid;
  border-right-width: 0.5px;
  border-right-style: solid;
  border-right-color: ${Colors.primary3};
`;

export const ObjAsTableCelKeyText = styled.Text`
  flex: 1;
  font-size: 12px;
  font-weight: bold;
  margin-left: 2px;
`;

export const ObjAsTableCelValue = _styled.td`
  background-color: ${Colors.card};
  padding: 5px;
  border-bottom-width: 0.5px;
  border-bottom-style: solid;
  border-bottom-color: ${Colors.primary2};
`;

export const ObjAsTableCelValueText = styled.Text`
  font-size: 12px;
`;
