/**
 * ### Log State
 * @since 0.5.0
 *
 * @description
 * An object that exports a set of constant values representing different log State.
 *
 * @note Defined Object
 * Since TypeScript `enum` can be inconvenient to work with, this app use define their own enum-like `objects` with `readonly` properties.
 *
 * @example
 * ```ts
 * import { Enums } from '@kinbay/utiljs';
 * const logState = Enums.ELogState.Error;
 * console.log(logState); // 1
 * ```
 *
 * @enum
 * @category Logger
 */
export const ELogState = {
	/** - The silent log level (0)  */
	Silent: 0,
	/** - The error log level (1)  */
	Error: 1,
	/** - The warning log level (2)  */
	Warn: 2,
	/** - The info log level (3)  */
	Info: 3,
	/** - The success log level (4)  */
	Success: 4,
	/** - The debug log level (5)  */
	Debug: 5
} as const;
