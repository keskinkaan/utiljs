/**
 * ### Is Function
 * @since 0.3.0
 *
 * @description
 * This function is a checker that checks if the given value is a `function`.
 * If the given value is a `function`, it will be returns `true`.
 * If the given value is not a `function`, it will be returns `false`.
 *
 * @param v Value unknown
 * @returns If the given value is a `function`, it will be returns `true`. If the given value is not a `function`, it will be returns `false`.
 *
 * @example
 * ```ts
 * import { Checker } from '@kinbay/utiljs';
 *
 * const a = () => {};
 * const b = 'a';
 * console.log(Checker.isFunc(a)); // true
 * console.log(Checker.isFunc(b)); // false
 * ```
 *
 * @category Checker
 */
export const isFunc = (v: unknown): v is () => void => typeof v === 'function';
