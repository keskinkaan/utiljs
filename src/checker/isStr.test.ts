import { isStr } from './isStr';

describe('isStr test is running', () => {
	it('should return true', () => {
		expect(isStr('')).toBe(true);
		expect(isStr('string')).toBe(true);
	});

	it('should return false', () => {
		expect(isStr(0)).toBe(false);
		expect(isStr([])).toBe(false);
		expect(isStr({})).toBe(false);
		expect(isStr(null)).toBe(false);
		expect(isStr(undefined)).toBe(false);
	});
});
