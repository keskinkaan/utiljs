//? Ignore the following rules for testing files, as they are not actual code
/* eslint-disable no-empty-function */
import { isFunc } from './isFunc';

describe('isFunc test is running', () => {
	it('checks if value is a function', () => {
		expect(isFunc(() => {})).toEqual(true);
		expect(isFunc(function () {})).toEqual(true);
		expect(isFunc(class {})).toEqual(true);
		expect(isFunc({})).toEqual(false);
		expect(isFunc([])).toEqual(false);
		expect(isFunc(null)).toEqual(false);
		expect(isFunc(undefined)).toEqual(false);
		expect(isFunc('')).toEqual(false);
		expect(isFunc(1)).toEqual(false);
		expect(isFunc(true)).toEqual(false);
		expect(isFunc(false)).toEqual(false);
	});
});
