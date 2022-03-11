import styled from 'styled-components/native';
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
  color: white;
  font-size: 12px;
  font-weight: bold;
  margin-right: 10px;
`;

export const DataExplorerValueText = styled.Text`
  font-size: 14px;
  color: ${Colors.text};
`;