/**
 * ### Is Symbol
 * @since 0.3.0
 *
 * @description
 * This function is a checker that checks if the given value is a `symbol`.
 * If the given value is a `symbol`, it will be returns `true`.
 * If the given value is not a `symbol`, it will be returns `false`.
 *
 * @param v Value unknown
 * @returns If the given value is a `symbol`, it will be returns `true`. If the given value is not a `symbol`, it will be returns `false`.
 *
 * @example
 * ```ts
 * import { Checker } from '@kinbay/utiljs';
 *
 * const a = Symbol('a');
 * const b = 'a';
 * console.log(Checker.isSym(a)); // true
 * console.log(Checker.isSym(b)); // false
 * ```
 *
 * @category Checker
 */
export const isSym = (v: unknown): v is symbol => typeof v === 'symbol';
