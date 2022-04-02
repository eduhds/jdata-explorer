import React from 'react';
import {} from 'react-native';
import { VscJson } from 'react-icons/vsc';
import { BiBracket } from 'react-icons/bi';
import { FiType } from 'react-icons/fi';
import { AiOutlineNumber } from 'react-icons/ai';
import { RiCheckboxMultipleFill } from 'react-icons/ri';
import { IoRemoveCircleOutline } from 'react-icons/io5';

import Colors from '../../../../themes/Colors';

export default function RenderTypeIcon({ value, selected, color, size }) {
	const style = { fontSize: size || 14, color: color ? color : selected ? Colors.white : Colors.primary2 };

	switch (true) {
		case value === null || value === undefined:
			return <IoRemoveCircleOutline style={style} />;
		case Array.isArray(value):
			return <BiBracket style={style} />;
		case typeof value === 'object':
			return <VscJson style={style} />;
		case typeof value === 'string':
			return <FiType style={style} />;
		case typeof value === 'number':
			return <AiOutlineNumber style={style} />;
		case typeof value === 'boolean':
			return <RiCheckboxMultipleFill style={style} />;
		default:
			return null;
	}
}
