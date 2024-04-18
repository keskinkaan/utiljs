import { TGuard } from '../types';

/**
 * ### Boolean Guard
 * @since 0.4.0
 *
 * @description
 * This function is a guard that checks if the given value is a `boolean`.
 * If the given value is a `boolean`, it will be returns the given value back.
 * If the sent value is not a `boolean`, it will be throws an error.
 *
 * @param v Value unknown
 * @returns If the given value is a `boolean`, it will be returns the given value back. If the sent value is not a `boolean`, it will be throws an error.
 *
 * @throws If the value is not a `boolean`, it will be throws an error.
 *
 * @example
 * ```ts
 * import { Guarder } from '@kinbay/utiljs';
 *
 * Guarder.bool(true); // Returns: true
 * Guarder.bool('Hello World!'); // Throws: The Hello World! is a not boolean
 * ```
 */
export const bool: TGuard<boolean> = (v: unknown) => {
	if (typeof v !== 'boolean')
		throw new Error(`The "${v as string}" is not a boolean`);
	return v;
};
