import styled from 'styled-components/native';

import Colors from '../../../../themes/Colors';

export const DataEntryFileContainer = styled.View`
  background-color: ${Colors.white};
  padding: 10px;
`;

export const DataEntryFileTitle = styled.Text`
  margin-bottom: 10px;
  font-size: 14px;
  color: ${Colors.text};
`;

export const DataEntryFileFooter = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10px;
`;
