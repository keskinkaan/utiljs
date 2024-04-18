/* eslint-disable no-unused-vars */
/**
 * ### Typeof Guard
 * @since 0.1.0
 *
 * @description
 * Type of function that checks the type of value sent.
 *
 * @typeParam T The identity type
 * @param v Value unknown.
 * @returns The value if the submitted value matches the **`T`** type.
 *
 * @example
 * ```ts
 *  const str: TGuard<string> = (v: unknown): string => {
 *    if (typeof v !== 'string') throw new Error(`The ${v} is a not string`);
 *      return v;
 *  };
 * ```
 * @category Guards
 */

export type TGuard<T> = (v: unknown) => T;
