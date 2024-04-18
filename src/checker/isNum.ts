/**
 * ### Is Number
 * @since 0.3.0
 *
 * @description
 * This function is a checker that checks if the given value is a `number`.
 * If the given value is a `number`, it will be returns `true`.
 * If the given value is not a `number`, it will be returns `false`.
 *
 * @param v Value unknown
 * @returns If the given value is a `number`, it will be returns `true`. If the given value is not a `number`, it will be returns `false`.
 *
 * @example
 * ```ts
 * import { Checker } from '@kinbay/utiljs';
 *
 * const a = 1;
 * const b = 'a';
 * console.log(Checker.isNum(a)); // true
 * console.log(Checker.isNum(b)); // false
 * ```
 *
 * @category Checker
 */
export const isNum = (v: unknown): v is number => typeof v === 'number';
