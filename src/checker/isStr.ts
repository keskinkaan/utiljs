/**
 * ### Is String
 * @since 0.3.0
 *
 * @description
 * This function is a checker that checks if the given value is a `string`.
 * If the given value is a `string`, it will be returns `true`.
 * If the given value is not a `string`, it will be returns `false`.
 *
 * @param v Value unknown
 * @returns If the given value is a `string`, it will be returns `true`. If the given value is not a `string`, it will be returns `false`.
 *
 * @example
 * ```ts
 * import { Checker } from '@kinbay/utiljs';
 *
 * const a = 'a';
 * const b = 1;
 * console.log(Checker.isStr(a)); // true
 * console.log(Checker.isStr(b)); // false
 * ```
 *
 * @category Checker
 */
export const isStr = (v: unknown): v is string => typeof v === 'string';
