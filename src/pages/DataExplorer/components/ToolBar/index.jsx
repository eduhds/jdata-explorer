import React from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { FiType } from 'react-icons/fi';
import { BsServer } from 'react-icons/bs';

import { ToolBarContainer, ToolBarInfoRow, ToolBarInfoText } from './styles';
import Colors from '../../../../themes/Colors';

export default function ToolBar({ info }) {
	const Icon =
		info?.source === 'text' ? FiType : info?.source === 'file' ? FaFileAlt : info?.source === 'url' ? BsServer : null;

	return (
		<ToolBarContainer>
			<ToolBarInfoRow>
				{Icon !== null && <Icon style={{ color: Colors.primary1, fontSize: 14 }} />}
				<ToolBarInfoText>{info?.name}</ToolBarInfoText>
			</ToolBarInfoRow>
		</ToolBarContainer>
	);
}
