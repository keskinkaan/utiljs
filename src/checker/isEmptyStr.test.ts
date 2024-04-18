import { isEmptyStr } from './isEmptyStr';

describe('isEmptyStr test is running', () => {
	it('should return true for empty string', () => {
		expect(isEmptyStr('')).toEqual(true);
		expect(isEmptyStr(' ')).toEqual(true);
		expect(isEmptyStr('a')).toEqual(false);
		expect(isEmptyStr('1')).toEqual(false);
		expect(isEmptyStr(1)).toEqual(false);
		expect(isEmptyStr(null)).toEqual(false);
		expect(isEmptyStr(undefined)).toEqual(false);
		expect(isEmptyStr({})).toEqual(false);
		expect(isEmptyStr([])).toEqual(false);
		expect(isEmptyStr(true)).toEqual(false);
	});
});
