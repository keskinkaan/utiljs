import { str } from './str';

describe('String Guard', () => {
	it('should return the value if it is a string', () => {
		expect(str('Hello World!')).toBe('Hello World!');
	});

	it('should throw an error if the value is not a string', () => {
		expect(() => str(123)).toThrow('The "123" is a not string');
	});
});
