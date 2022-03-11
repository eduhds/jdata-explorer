import styled from 'styled-components/native';

import Colors from '../../../../themes/Colors';

export const DataEntryUrlContainer = styled.View`
  background-color: ${Colors.white};
  padding: 10px;
`;

export const DataEntryUrlTitle = styled.Text`
  margin-bottom: 10px;
  font-size: 14px;
  color: ${Colors.text};
`;

export const DataEntryUrlInput = styled.TextInput`
  flex: 1;
  height: 40px;
  border-width: 1px;
  border-color: ${Colors.primary1};
  border-radius: 2px;
  padding: 2px;
  margin-right: 5px;
`;

export const DataEntryUrlFooter = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const DataEntryUrlMethodRow = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const DataEntryUrlMethodButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${({ selected }) => (selected ? Colors.primary3 : Colors.primary4)};
  justify-content: center;
`;

export const DataEntryUrlMethodText = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: ${Colors.primary2};
`;
