import styled from 'styled-components/native';

import Colors from '../../themes/Colors';

export const HomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const HomeDataEntryContainer = styled.View`
  width: 30%;
  background-color: ${Colors.primary1};
`;

export const HomeDataEntryHeader = styled.TouchableOpacity`
  padding: 15px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-bottom-width: 2px;
  border-bottom-color: ${Colors.primary3};
`;

export const HomeDataEntryTitle = styled.Text`
  color: ${Colors.white};
  font-size: 16px;
`;
