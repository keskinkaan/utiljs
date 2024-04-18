/**
 * ### Is Boolean
 * @since 0.3.0
 *
 * @description
 * This function is a checker that checks if the given value is a `boolean`.
 * If the given value is a `boolean`, it will be returns `true`.
 * If the given value is not a `boolean`, it will be returns `false`.
 *
 * @param v Value unknown
 * @returns If the given value is a `boolean`, it will be returns `true`. If the given value is not a `boolean`, it will be returns `false`.
 *
 * @example
 * ```ts
 * import { Checker } from '@kinbay/utiljs';
 *
 * const a = true;
 * const b = 'a';
 * console.log(Checker.isBool(a)); // true
 * console.log(Checker.isBool(b)); // false
 * ```
 *
 * @category Checker
 */
export const isBool = (v: unknown): v is boolean => typeof v === 'boolean';
