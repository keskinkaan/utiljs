import { bool } from './bool';

describe('Boolean Guard', () => {
	it('should return the given value if it is a boolean', () => {
		expect(bool(true)).toBe(true);
		expect(bool(false)).toBe(false);
	});

	it('should throw an error if the given value is not a boolean', () => {
		expect(() => bool('Hello World!')).toThrow(
			'The "Hello World!" is not a boolean'
		);
	});
});
