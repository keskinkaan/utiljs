import { isSym } from './isSym';

describe('isSym', () => {
	it('should return true for sym', () => {
		expect(isSym(Symbol())).toBe(true);
	});

	it('should return false for non-sym', () => {
		expect(isSym('')).toBe(false);
	});
});
