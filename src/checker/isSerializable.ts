/**
 * ### Is Serializable
 * @since 0.7.2
 *
 * @description
 * This function is a checker that checks if the given value is a `string`, `number`, or `boolean`.
 * If the given value is a `string`, `number`, or `boolean`, it will be returns `true`.
 * If the given value is not a `string`, `number`, or `boolean`, it will be returns `false`.
 *
 * @param v Value unknown
 * @returns If the given value is a `string`, `number`, or `boolean`, it will be returns `true`. If the given value is not a `string`, `number`, or `boolean`, it will be returns `false`.
 *
 * @example
 * ```ts
 * import { Checker } from '@kinbay/utiljs';
 *
 * const a = 'a';
 * const b = 1;
 * const c = true;
 * const d = [];
 * console.log(Checker.isSerializable(a)); // true
 * console.log(Checker.isSerializable(b)); // true
 * console.log(Checker.isSerializable(c)); // true
 * console.log(Checker.isSerializable(d)); // false
 * ```
 *
 * @category Checker
 */
export const isSerializable = (v: unknown) =>
	typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean';
