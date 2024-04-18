import { isArr } from './isArr';

describe('isArr test is running', () => {
	it('checks if value is an array and length is zero', () => {
		expect(isArr<number>([1, 2, 3])).toEqual(true);
		expect(isArr<string>([], -1)).toEqual(true);
		expect(isArr<string>(null)).toEqual(false);
		expect(isArr<string>(undefined)).toEqual(false);
		expect(isArr<string>({})).toEqual(false);
		expect(isArr<string>('')).toEqual(false);
		expect(isArr<string>(1)).toEqual(false);
		expect(isArr<string>(true)).toEqual(false);
		expect(isArr<string>(false)).toEqual(false);
	});
	it('checks if value is an array and length is greater than zero', () => {
		expect(isArr<string>([])).toEqual(false);
	});
});
