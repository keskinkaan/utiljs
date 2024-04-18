import { TGuard } from '../types';

/**
 * ### Number Guard
 * @since 0.4.0
 *
 * @description
 * This function is a guard that checks if the given value is a `number`.
 * If the given value is a `number`, it will be returns the given value back.
 * If the sent value is not a `number`, it will be throws an error.
 *
 * @param v Value unknown
 * @returns If the given value is a `number`, it will be returns the given value back. If the sent value is not a `number`, it will be throws an error.
 *
 * @throws If the value is not a `number`, it will be throws an error.
 *
 * @example
 * ```ts
 * import { Guarder } from '@kinbay/utiljs';
 *
 * Guarder.num(123); // Returns: 123
 * Guarder.num('Hello World!'); // Throws: The Hello World! is a not number
 * ```
 */
export const num: TGuard<number> = (v: unknown) => {
	if (typeof v !== 'number')
		throw new Error(`The "${v as string}" is not a number`);
	return v;
};
