import React from 'react';

import { TextErrorBase } from './styles';

export default function TextError({ children }) {
	return <>{children && typeof children === 'string' ? <TextErrorBase>{children}</TextErrorBase> : null}</>;
}
