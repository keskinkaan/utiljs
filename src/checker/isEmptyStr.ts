/**
 * ### Is Empty String
 * @since 0.3.0
 *
 * @description
 * This function is a checker that checks if the given value is an empty string.
 * If the given value is an empty string, it will be returns `true`.
 * If the given value is not an empty string, it will be returns `false`.
 *
 * @param v Value unknown
 * @returns If the given value is an empty string, it will be returns `true`. If the given value is not an empty string, it will be returns `false`.
 *
 * @example
 * ```ts
 * import { Checker } from '@kinbay/utiljs';
 *
 * const a = '';
 * const b = 'a';
 * console.log(Checker.isEmptyStr(a)); // true
 * console.log(Checker.isEmptyStr(b)); // false
 * ```
 *
 * @category Checker
 */
export const isEmptyStr = (v: unknown): v is string =>
	typeof v === 'string' && v.replace(/ /g, '') === '';
