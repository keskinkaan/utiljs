import { isNum } from './isNum';

describe('isNum test is running', () => {
	it('checks if value is a number', () => {
		expect(isNum(1)).toEqual(true);
		expect(isNum(1.1)).toEqual(true);
		expect(isNum(0.1)).toEqual(true);
		expect(isNum(-1)).toEqual(true);
		expect(isNum(-1.1)).toEqual(true);
		expect(isNum(-0.1)).toEqual(true);
		expect(isNum(0)).toEqual(true);
		expect(isNum('')).toEqual(false);
		expect(isNum('a')).toEqual(false);
		expect(isNum(null)).toEqual(false);
		expect(isNum(undefined)).toEqual(false);
		expect(isNum({})).toEqual(false);
		expect(isNum([])).toEqual(false);
		expect(isNum(true)).toEqual(false);
		expect(isNum(false)).toEqual(false);
	});
});
