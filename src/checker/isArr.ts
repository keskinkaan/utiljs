/**
 * ### Is Array
 * @since 0.3.0
 *
 * @description
 * This function is a checker that checks if the given value is an `array`.
 * If the given value is an `array`, it will be returns `true`.
 * If the given value is not an `array`, it will be returns `false`.
 *
 * @typeParam T Generic type. T is the type of the array.
 * @param v Value unknown
 * @returns If the given value is an `array`, it will be returns `true`. If the given value is not an `array`, it will be returns `false`.
 *
 * @example
 * ```ts
 * import { Checker } from '@kinbay/utiljs';
 *
 * const a = [1, 2, 3];
 * const b = 'a';
 * const c = [];
 * console.log(Checker.isArray<number>(a)); // true
 * console.log(Checker.isArray<string>(b)); // false
 * console.log(Checker.isArray<string>(c)); // false because value c.length is zero
 * console.log(Checker.isArray<string>(c, -1)); // true because 0 is bigger than -1
 * ```
 * @category Checker
 */
export const isArr = <T>(v: unknown, length = 0): v is Array<T> =>
	Array.isArray(v) && v.length > length;
