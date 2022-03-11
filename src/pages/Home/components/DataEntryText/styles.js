import styled from 'styled-components/native';

import Colors from '../../../../themes/Colors';

export const DataEntryTextContainer = styled.View`
  background-color: ${Colors.white};
  padding: 10px;
`;

export const DataEntryTextTitle = styled.Text`
  margin-bottom: 10px;
  font-size: 14px;
  color: ${Colors.text};
`;

export const DataEntryTextInput = styled.TextInput`
  height: 100px;
  border-width: 1px;
  border-color: ${Colors.primary1};
  border-radius: 2px;
  padding: 2px;
`;

export const DataEntryTextFooter = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10px;
`;
