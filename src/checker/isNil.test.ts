import { isNil } from './isNil';

describe('isNil test is running', () => {
	it('should return true if the sent value is null or undefined', () => {
		const a = null;
		const b = undefined;
		const c = 'a';
		expect(isNil(a)).toBe(true);
		expect(isNil(b)).toBe(true);
		expect(isNil(c)).toBe(false);
	});
});
