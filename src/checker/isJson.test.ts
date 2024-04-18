import { isJson } from './isJson';

describe('isJson test is running', () => {
	it('checks if value is a json string', () => {
		expect(isJson('{"a":1}')).toEqual(true);
		expect(isJson('{"a":1')).toEqual(false);
		expect(isJson('"a":1}')).toEqual(false);
		expect(isJson('[{"a":1}, {"b":2}]')).toEqual(true);
		expect(isJson('[{"a":1}, {"b":2}')).toEqual(false);
		expect(isJson('{"a":1}, {"b":2}]')).toEqual(false);
		expect(isJson('')).toEqual(false);
		expect(isJson('a')).toEqual(false);
		expect(isJson('1')).toEqual(false);
		expect(isJson(1)).toEqual(false);
		expect(isJson(null)).toEqual(false);
		expect(isJson(undefined)).toEqual(false);
		expect(isJson({})).toEqual(false);
		expect(isJson('{}')).toEqual(false);
		expect(isJson('[]')).toEqual(false);
		expect(isJson([])).toEqual(false);
		expect(isJson(true)).toEqual(false);
		expect(isJson('{true}')).toEqual(false);
	});
});
