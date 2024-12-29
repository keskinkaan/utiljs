import { nul } from './nul';

describe('nul', () => {
	it('should return null', () => {
		expect(nul(null)).toBe(null);
	});

	it('should throw an error', () => {
		expect(() => nul(123)).toThrow('The "123" is a not null');
	});

	it('should throw an error', () => {
		expect(() => nul('Hello World!')).toThrow(
			'The "Hello World!" is a not null'
		);
	});

	it('should throw an error', () => {
		expect(() => nul(undefined)).toThrow('The "undefined" is a not null');
	});

	it('should throw an error', () => {
		expect(() => nul({})).toThrow('The "[object Object]" is a not null');
	});

	it('should throw an error', () => {
		expect(() => nul([])).toThrow('The "" is a not null');
	});
});
