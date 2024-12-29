import { TGuard } from '../types';

/**
 * ### Null Guard
 * @since 0.4.0
 *
 * @description
 * This function is a guard that checks if the given value is a `null`.
 * If the given value is a `null`, it will be returns the given value back.
 * If the sent value is not a `null`, it will be throws an error.
 *
 * @param v Value unknown
 * @returns If the given value is a `null`, it will be returns the given value back. If the sent value is not a `null`, it will be throws an error.
 *
 * @throws If the value is not a `null`, it will be throws an error.
 *
 * @example
 * ```ts
 * import { Guarder } from '@kinbay/utiljs';
 *
 * Guarder.null(null); // Returns: null
 * Guarder.null(123); // Throws: The 123 is a not null
 * ```
 *
 * @category Guards
 */

export const nul: TGuard<null> = (v: unknown): null => {
	if (v !== null) throw new Error(`The "${v as string}" is a not null`);
	return v;
};
