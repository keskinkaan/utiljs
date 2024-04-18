import { num } from './num';

describe('Number Guard', () => {
	it('should return the given value if the given value is a number', () => {
		expect(num(123)).toBe(123);
	});

	it('should throw an error if the given value is not a number', () => {
		expect(() => num('Hello World!')).toThrow(
			'The "Hello World!" is not a number'
		);
	});
});
