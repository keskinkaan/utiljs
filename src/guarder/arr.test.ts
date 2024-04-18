import { arr } from './arr';
import { str } from './str';

describe('Array Guard', () => {
	it('should return the given value if the given value is an array', () => {
		const schema = arr(str);
		const data = ['John Doe', 'Jane Doe'];
		expect(schema(data)).toEqual(['John Doe', 'Jane Doe']);
	});

	it('should throw an error if the given value is not an array', () => {
		expect(() => arr((v) => v)('Hello World!')).toThrow(
			'The Hello World! is a not array'
		);
	});

	it('should throw an error if the given value is not a string array', () => {
		const schema = arr<string>(str);
		const data = ['John Doe', 25];
		expect(() => schema(data)).toThrow('The "25" is a not string');
	});
});
