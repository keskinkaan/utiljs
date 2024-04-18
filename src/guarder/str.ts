import { TGuard } from '../types';

/**
 * ### String Guard
 * @since 0.4.0
 *
 * @description
 * This function is a guard that checks if the given value is a `string`.
 * If the given value is a `string`, it will be returns the given value back.
 * If the sent value is not a `string`, it will be throws an error.
 *
 * @param v Value unknown
 * @returns If the given value is a `string`, it will be returns the given value back. If the sent value is not a `string`, it will be throws an error.
 *
 * @throws If the value is not a `string`, it will be throws an error.
 *
 * @example
 * ```ts
 * import { Guarder } from '@kinbay/utiljs';
 *
 * Guarder.str('Hello World!'); // Returns: 'Hello World!'
 * Guarder.str(123); // Throws: The 123 is a not string
 * ```
 *
 * @category Guards
 */
export const str: TGuard<string> = (v: unknown): string => {
	if (typeof v !== 'string')
		throw new Error(`The "${v as string}" is a not string`);
	return v;
};
