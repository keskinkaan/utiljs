import { TGuard } from '../types';

/**
 * ### Type Array
 * @since 0.4.0
 *
 * @description
 * This function basically checks if all items of the `array` has the type enforced by inner type guard.
 *
 * @typeParam T The type of the array that will be checked.
 * @param inn The inner type guard.
 * @returns Returns the value if the submitted value matches the `T` type. If the submitted value does not match the `T` type, it throws an error.
 *
 * @throws If the value is not a `array`, it will be throws an error.
 *
 * @example
 * ```ts
 * import { Guarder } from '@kinbay/utiljs';
 *
 * const schema = Guarder.arr(Guarder.str);
 *
 * schema(['John Doe', 'Jane Doe']); // Returns: ['John Doe', 'Jane Doe']
 * schema(['John Doe', 25]); // Throws: The "25" is a not string
 * ```
 */
export const arr = <T>(inn: TGuard<T>) => {
	return (v: unknown) => {
		if (!Array.isArray(v)) {
			throw new Error(`The ${v as string} is a not array`);
		} else {
			return v.map(inn);
		}
	};
};
