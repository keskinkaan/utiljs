import { isSerializable } from './isSerializable';

describe('isSerializable', () => {
	it('should return true if the given value is a string, number, or boolean', () => {
		expect(isSerializable('a')).toBe(true);
		expect(isSerializable(1)).toBe(true);
		expect(isSerializable(true)).toBe(true);
	});

	it('should return false if the given value is not a string, number, or boolean', () => {
		expect(isSerializable([])).toBe(false);
	});
});
