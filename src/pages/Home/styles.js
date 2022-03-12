import styled from 'styled-components/native';

import Colors from '../../themes/Colors';
import Layout from '../../themes/Layout';

export const HomeContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const HomeDataEntryContainer = styled.View`
  align-self: center;
  width: ${Layout.selectValue({ sm: '90%', md: '80%', lg: '40%' })};
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
