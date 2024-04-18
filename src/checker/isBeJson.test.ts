//? Ignore the following rules for testing files, as they are not actual code
/* eslint-disable no-empty-function */
import { isBeJson } from './isBeJson';

describe('isBeJson test is running', () => {
	it('should return true for valid JSON strings', () => {
		expect(isBeJson('{"a":"a"}')).toBe(true);
		expect(isBeJson('[{"a":"a"}, {"b":"b"}]')).toBe(true);
	});

	it('should return false for invalid JSON strings', () => {
		expect(isBeJson('a')).toBe(false);
		expect(isBeJson('"a":"a"}')).toBe(false);
		expect(isBeJson('[{"a":"a"}, {"b":"b"}')).toBe(false);
	});

	it('should return false for non-string values', () => {
		expect(isBeJson(123)).toBe(false);
		expect(isBeJson(null)).toBe(false);
		expect(isBeJson(undefined)).toBe(false);
		expect(isBeJson({})).toBe(false);
		expect(isBeJson([])).toBe(false);
		expect(isBeJson(true)).toBe(false);
		expect(isBeJson(() => {})).toBe(false);
	});
});
