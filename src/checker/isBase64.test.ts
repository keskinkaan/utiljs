import { isBase64 } from './isBase64';

describe('isBase64 test is running', () => {
	it('checks if value is a base64 string', () => {
		expect(isBase64('base64:aGVsbG8gd29ybGQ')).toEqual(true);
		expect(isBase64('aGVsbG8gd29ybGQ')).toEqual(false);
		expect(isBase64('')).toEqual(false);
		expect(isBase64('a')).toEqual(false);
		expect(isBase64('1')).toEqual(false);
		expect(isBase64(1)).toEqual(false);
		expect(isBase64(null)).toEqual(false);
		expect(isBase64(undefined)).toEqual(false);
		expect(isBase64({})).toEqual(false);
		expect(isBase64([])).toEqual(false);
		expect(isBase64(true)).toEqual(false);
	});
});
