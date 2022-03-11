import styled from 'styled-components/native';

import Colors from '../../themes/Colors';

export const ButtonContainer = styled.TouchableOpacity`
  padding: 8px;
  min-width: 80px;
  background-color: ${({ color, mode }) => (mode === 'outline' ? 'transparent' : color || Colors.primary2)};
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: ${({ color }) => color || Colors.primary2};
`;

export const ButtonTitle = styled.Text`
  color: ${({ mode }) => (mode === 'outline' ? Colors.primary2 : 'white')};
  font-size: 14px;
  font-weight: 600;
`;
