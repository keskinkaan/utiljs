/**
 * ### Typeof Value
 * @since 0.5.0
 *
 * @description
 * So, when you use TOV, it will give you the union of all the value types in the object ` T `.
 * This can be useful when you want to work with the values of an object without knowing its specific structure in advance.
 *
 * @note The `TOV` type correctly references the ` T ` object to extract the keys as expected.
 *
 * @typeParam T - The identity type
 * @returns - The type key form `object`
 *
 * @example
 * ```ts
 * import { ELogLevel } from '../enums';
 * export type TLogLevel = TOV<typeof ELogLevel>;
 * TLogLevel // 'DEBUG' | 'ERROR' | 'INFO' | 'SUCCESS' | 'WARN'
 * ```
 * @category App
 */
export type TOV<T> = T[keyof T];
