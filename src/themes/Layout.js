/* 
  sm 0-480
  md 480-768
  lg 768-1280 
  */

import { Dimensions } from 'react-native';

export default class Layout {
	static selectValue({ sm, md, lg }) {
		switch (this.screenSize()) {
			case 'sm':
				return sm;
			case 'md':
				return md;
			case 'lg':
			default:
				return lg;
		}
	}

	static screenSize() {
		const width = Dimensions.get('window').width;

		if (width <= 480) return 'sm';
		else if (width > 480 && width <= 768) return 'md';
		else return 'lg';
	}
}
