import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FaFileAlt } from 'react-icons/fa';
import { FiType } from 'react-icons/fi';
import { BsServer } from 'react-icons/bs';
import { RiSave3Fill } from 'react-icons/ri';
import { IoMdUndo } from 'react-icons/io';

import { ToolBarContainer, ToolBarInfoRow, ToolBarInfoText } from './styles';
import Colors from '../../../../themes/Colors';

export default function ToolBar({ info, hasChanges, onSave, onUndo }) {
	const Icon =
		info?.source === 'text' ? FiType : info?.source === 'file' ? FaFileAlt : info?.source === 'url' ? BsServer : null;

	return (
		<ToolBarContainer>
			<ToolBarInfoRow>
				{Icon !== null && <Icon style={{ color: Colors.primary1, fontSize: 14 }} />}
				<ToolBarInfoText>{info?.name}</ToolBarInfoText>
			</ToolBarInfoRow>

			<TouchableOpacity disabled={!hasChanges} style={{ marginRight: 5 }} onPress={onUndo}>
				<IoMdUndo style={{ fontSize: 20, color: hasChanges ? Colors.primary2 : Colors.inactive }} />
			</TouchableOpacity>

			<TouchableOpacity disabled={!hasChanges} style={{ marginRight: 5 }} onPress={onSave}>
				<RiSave3Fill style={{ fontSize: 20, color: hasChanges ? Colors.primary2 : Colors.inactive }} />
			</TouchableOpacity>
		</ToolBarContainer>
	);
}
