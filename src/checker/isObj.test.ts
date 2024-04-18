import { isObj } from './isObj';

describe('isObj test is running', () => {
	it('should return true for objects', () => {
		expect(isObj({ a: 'a' })).toBe(true);
		expect(isObj({})).toBe(true);
		expect(isObj({}, false)).toBe(true);
		expect(isObj({ a: 1 }, true)).toBe(true);
	});

	it('should return false for non-objects', () => {
		expect(isObj('a')).toBe(false);
		expect(isObj(null)).toBe(false);
		expect(isObj([])).toBe(false);
		expect(isObj(1)).toBe(false);
	});

	it('should return false for empty objects when isEmptyCheck is true', () => {
		expect(isObj({}, true)).toBe(false);
	});

	it('should return true for non-empty objects when isEmptyCheck is true', () => {
		expect(isObj({ a: 'a' }, true)).toBe(true);
	});
});
