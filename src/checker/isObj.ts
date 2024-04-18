/**
 * ### Is Object
 * @since 0.3.0
 *
 * @description
 * This function is a checker that checks if the given value is an `object`.
 * If the given value is an `object`, it will be returns `true`.
 * If the given value is not an `object`, it will be returns `false`.
 *
 * @warning
 * >This function is not working for **`arrays`**. If you want to check if the value is an `array`, you can use the **{@link isArr | isArr}** function.
 *
 * @typeParam T Generic type. T is the type of the object.
 * @param v Value unknown
 * @param isEmptyCheck If the given value is an empty object, it will be returns `false`. If the given value is not an empty object, it will be returns `true`. Default value is `false`.
 * @returns If the given value is an `object`, it will be returns `true`. If the given value is not an `object`, it will be returns `false`.
 *
 * @example
 * ```ts
 * import { Checker } from '@kinbay/utiljs';
 *
 * const a = { a: 'a' };
 * const b = 'a';
 * const c = null;
 * const d = [];
 * const e = {};
 * console.log(Checker.isObj<typeof a>(a)); // true
 * console.log(Checker.isObj<typeof b>(b)); // false
 * console.log(Checker.isObj<typeof c>(c)); // false
 * console.log(Checker.isObj<typeof d>(d)); // false
 * console.log(Checker.isObj<typeof e>(e)); // true
 * console.log(Checker.isObj<typeof e>(e, true)); // false because value e.length is zero
 * ```
 *
 * @category Checker
 */
export const isObj = <T>(v: unknown, isEmptyCheck = false): v is T => {
	if (!isEmptyCheck)
		return v !== null && typeof v === 'object' && !(v instanceof Array);
	else
		return (
			typeof v === 'object' &&
			v !== null &&
			!(v instanceof Array) &&
			Object.keys(v).length > 0
		);
};
