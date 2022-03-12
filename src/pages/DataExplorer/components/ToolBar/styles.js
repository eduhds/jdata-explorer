import styled from 'styled-components/native';

import Colors from '../../../../themes/Colors';

export const ToolBarContainer = styled.View`
  flex-direction: row;
  background-color: ${Colors.primary4};
  padding: 5px;
`;

export const ToolBarInfoRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ToolBarInfoText = styled.View`
  font-size: 14px;
  color: ${Colors.text};
  font-style: italic;
  margin-left: 2px;
`;
