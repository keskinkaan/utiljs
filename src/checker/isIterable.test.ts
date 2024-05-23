//? Ignore the following rules for testing files, as they are not actual code
/* eslint-disable no-empty-function */
import { isIterable } from './isIterable';

describe('isIterable', () => {
	it('should return true if the given value is an Iterable', () => {
		const a = [];
		const b = new Set();
		const c = new Map();
		const d = { [Symbol.iterator]: () => {} };
		expect(isIterable(a)).toBe(true);
		expect(isIterable(b)).toBe(true);
		expect(isIterable(c)).toBe(true);
		expect(isIterable(d)).toBe(true);
	});

	it('should return false if the given value is not an Iterable', () => {
		const a = 'a';
		const b = 1;
		const c = true;
		expect(isIterable(a)).toBe(false);
		expect(isIterable(b)).toBe(false);
		expect(isIterable(c)).toBe(false);
	});
});
