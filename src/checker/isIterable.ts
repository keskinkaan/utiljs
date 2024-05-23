/**
 * ### Is Iterable
 * @since 0.7.2
 *
 * @description
 * This function is a checker that checks if the given value is an `Iterable`.
 * If the given value is an `Iterable`, it will be returns `true`.
 * If the given value is not an `Iterable`, it will be returns `false`.
 *
 * @param v Value unknown
 * @returns If the given value is an `Iterable`, it will be returns `true`. If the given value is not an `Iterable`, it will be returns `false`.
 *
 * @example
 * ```ts
 * import { Checker } from '@kinbay/utiljs';
 *
 * const a = 'a';
 * const b = 1;
 * const c = true;
 * const d = [];
 * console.log(Checker.isIterable(a)); // false
 * console.log(Checker.isIterable(b)); // false
 * console.log(Checker.isIterable(c)); // false
 * console.log(Checker.isIterable(d)); // true
 * ```
 *
 * @category Checker
 */
export const isIterable = (v: unknown): v is Iterable<unknown> =>
	typeof v === 'object' && v !== null && Symbol.iterator in v;
