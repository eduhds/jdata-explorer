export default class JDExMethods {
	static REGULAR_OBJECT_VALUES_TYPES = ['string', 'number', 'boolean'];

	static isSet(value) {
		return value !== undefined && value !== null;
	}

	static isArray(value) {
		return Array.isArray(value);
	}

	static isRegularValue(value) {
		if (typeof value === 'undefined') return false;
		return this.REGULAR_OBJECT_VALUES_TYPES.includes(typeof value) || value === null;
	}

	static isRegularObject(value) {
		if (!value) return false;
		if (this.isArray(value)) return false;
		return Object.values(value)
			.map(val => this.isRegularValue(val))
			.every(v => v === true);
	}

	static isRegularObjectArray(value) {
		if (!value) return false;
		return (
			this.isArray(value) &&
			Object.values(value)
				.map(val => !this.isArray(val) && !this.isRegularValue(val) && this.isRegularObject(val))
				.every(v => v === true)
		);
	}
}
