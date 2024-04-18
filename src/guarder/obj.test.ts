import { num } from './num';
import { obj } from './obj';
import { str } from './str';

describe('obj', () => {
	it('should return the value if the submitted value is a object', () => {
		const schema = obj({
			name: str,
			age: num
		});
		const data = {
			name: 'John Doe',
			age: 25
		};
		expect(schema(data)).toEqual({
			name: 'John Doe',
			age: 25
		});
	});

	it('should throw an error if the submitted value is not a object', () => {
		expect(() => obj({ name: str, age: num })('Hello World!')).toThrow(
			'The Hello World! is a not object'
		);
	});

	it('should throw an error if the submitted value is not a object with the correct schema', () => {
		const schema = obj({
			name: str,
			age: num
		});
		const data = {
			name: 'John Doe',
			age: '25'
		};
		expect(() => schema(data)).toThrow('The "25" is not a number');
	});
});
