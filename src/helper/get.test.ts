import { get } from './get';

describe('Helper: Get', () => {
	const obj = {
		user: {
			id: 1,
			name: 'John Doe'
		}
	};

	it('should get value from object by path', () => {
		const value = get(obj, 'user.name') as string;
		expect(value).toBe('John Doe');
	});

	it('should get value from object by path with array', () => {
		const value = get(obj, ['user', 'name']) as string;
		expect(value).toBe('John Doe');
	});

	it('should get undefined if path is not found', () => {
		const value = get(obj, 'user.email') as string;
		expect(value).toBe(undefined);
	});

	it('should get undefined if path is not found with array', () => {
		const value = get(obj, ['user', 'email']) as string;
		expect(value).toBe(undefined);
	});

	it('should get undefined if path is not found with empty string', () => {
		const value = get(obj, '') as string;
		expect(value).toBe(undefined);
	});

	it('should get value from object by path with default value', () => {
		const value = get(obj, 'user.email', 'Anonymous') as string;
		expect(value).toBe('Anonymous');
	});

	it('should get value from object by empty array', () => {
		const value = get(obj, []) as string;
		expect(value).toStrictEqual({ user: { id: 1, name: 'John Doe' } });
	});
});
