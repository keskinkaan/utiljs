import { isEqual } from './isEqual';

describe('isEqual test is running', () => {
	it('should return true', () => {
		const obj = { a: 1, b: 2 };
		const oth = { a: 1, b: 2 };

		const result = isEqual(obj, oth);
		expect(result).toBe(true);
	});

	it('should return true', () => {
		const obj = { a: 1, b: { c: 3 } };
		const oth = { a: 1, b: { c: 3 } };

		const result = isEqual(obj, oth);
		expect(result).toBe(true);
	});

	it('should return false', () => {
		const obj = { a: 1, b: 2 };
		const oth = { a: 1, b: 3 };

		const result = isEqual(obj, oth);
		expect(result).toBe(false);
	});

	it('should return false', () => {
		const obj = { a: 1, b: { c: 3 } };
		const oth = { a: 1, b: { c: 4 } };

		const result = isEqual(obj, oth);
		expect(result).toBe(false);
	});

	it('should return false', () => {
		const obj = { a: 1, b: 2 };
		const oth = { a: 1, b: 2, c: 3 };

		const result = isEqual(obj, oth);
		expect(result).toBe(false);
	});

	it('should return false', () => {
		const obj = { a: 1, b: 2 };
		const oth = { a: 1, d: 2 };

		const result = isEqual(obj, oth);
		expect(result).toBe(false);
	});

	it('should return false', () => {
		const obj = 'test';
		const oth = { a: 1 };

		const result = isEqual(obj, oth);
		expect(result).toBe(false);
	});
});
