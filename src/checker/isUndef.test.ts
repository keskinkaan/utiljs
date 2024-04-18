import { isUndef } from './isUndef';

describe('isUndef test is running', () => {
	it('checks if value is undefined', () => {
		expect(isUndef(undefined)).toEqual(true);
		expect(isUndef(null)).toEqual(false);
		expect(isUndef({})).toEqual(false);
		expect(isUndef([])).toEqual(false);
		expect(isUndef('')).toEqual(false);
		expect(isUndef(1)).toEqual(false);
		expect(isUndef(true)).toEqual(false);
		expect(isUndef(false)).toEqual(false);
	});
});
