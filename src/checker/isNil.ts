/**
 * ### Is Nil
 * @since 0.3.0
 *
 * @description
 * This function is a checker that checks if the given value is `null` or `undefined`.
 * If the given value is `null` or `undefined`, it will be returns `true`.
 * If the given value is not `null` or `undefined`, it will be returns `false`.
 *
 * @param v Value unknown
 * @returns If the given value is `null` or `undefined`, it will be returns `true`. If the given value is not `null` or `undefined`, it will be returns `false`.
 *
 * @example
 * ```js
 * import { Checker } from '@kinbay/utiljs';
 *
 * const a = null;
 * const b = undefined;
 * const c = 'a';
 * console.log(Checker.isNil(a)); // true
 * console.log(Checker.isNil(b)); // true
 * console.log(Checker.isNil(c)); // false
 * ```
 * @category Checker
 */
export const isNil = (v: unknown): v is null | undefined =>
	v === null || v === undefined;
