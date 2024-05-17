/**
 * ### Is Equal
 * @since 0.6.0
 *
 * @description
 * This function is a checker that checks if the given object is equal to the other object.
 * If the given object is equal to the other object, it will be returns `true`.
 * If the given object is not equal to the other object, it will be returns `false`.
 *
 * @param obj - Object
 * @param oth - Other object
 * @returns If the given object is equal to the other object, it will be returns `true`. If the given object is not equal to the other object, it will be returns `false`.
 *
 * @example
 * ```ts
 * import { Checker } from '@kinbay/utiljs';
 *
 * const obj = { a: 1, b: 2 };
 * const oth = { a: 1, b: 2 };
 *
 * const isEqual = Checker.isEqual(obj, oth);
 * console.log(isEqual); // true
 *
 * const obj = { a: 1, b: { c: 3} };
 * const oth = { a: 1, b: { c: 3} };
 *
 * const isEqual = Checker.isEqual(obj, oth);
 * console.log(isEqual); // true
 * ```
 * @category Checker
 */
export function isEqual(obj: unknown, oth: unknown): boolean {
	if (obj && oth && typeof obj === 'object' && typeof oth === 'object') {
		const objKeys = Object.keys(obj) as Array<keyof typeof obj>;
		const othKeys = Object.keys(oth) as Array<keyof typeof oth>;

		if (objKeys.length !== othKeys.length) {
			return false;
		}

		for (const key of objKeys) {
			if (!Object.hasOwnProperty.call(oth, key)) {
				return false;
			}

			if (typeof obj[key] === 'object' && typeof oth[key] === 'object') {
				if (!isEqual(obj[key], oth[key])) {
					return false;
				}
			} else {
				if (obj[key] !== oth[key]) {
					return false;
				}
			}
		}

		return true;
	} else {
		return false;
	}
}
