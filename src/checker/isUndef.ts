/**
 * ### Is Undefined
 * @since v0.3.0
 *
 * @description
 * This function is a checker that checks if the given value is `undefined`.
 * If the given value is `undefined`, it will be returns `true`.
 * If the given value is not `undefined`, it will be returns `false`.
 *
 * @param Value unknown
 * @returns If the given value is `undefined`, it will be returns `true`. If the given value is not `undefined`, it will be returns `false`.
 *
 * @example
 * ```ts
 * import { Checker } from '@kinbay/utiljs';
 *
 * const a = undefined;
 * const b = null;
 * console.log(Checker.isUndef(a)); // true
 * console.log(Checker.isUndef(b)); // false
 * ```
 * @category Checker
 */
export const isUndef = (v: unknown): v is undefined => v === undefined;
