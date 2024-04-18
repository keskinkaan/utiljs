import { isBool } from './isBool';

describe('isBool test is running', () => {
	it('should return true', () => {
		expect(isBool(true)).toBe(true);
	});

	it('should return false', () => {
		expect(isBool('true')).toBe(false);
	});
});
