/**
 * ### Is Base64
 * @since 0.3.0
 *
 * @description
 * This function is a checker that checks if the given value is a `base64`.
 * If the given value is a `base64`, it will be returns `true`.
 * If the given value is not a `base64`, it will be returns `false`.
 *
 * @param v Value unknown
 * @returns If the given value is a `base64`, it will be returns `true`. If the given value is not a `base64`, it will be returns `false`.
 *
 * @example
 * ```ts
 * import { Checker } from '@kinbay/utiljs';
 *
 * const a = 'base64:Zm9vYmFy';
 * const b = 'Zm9vYmFy';
 * console.log(Checker.isBase64(a)); // true
 * console.log(Checker.isBase64(b)); // false
 * ```
 *
 * @category Checker
 */
export const isBase64 = (v: unknown) =>
	typeof v === 'string' && v.startsWith('base64:');
