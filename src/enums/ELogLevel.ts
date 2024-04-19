/**
 * ### Log Level
 * @since 0.5.0
 *
 * @description
 * The `ELogLevel` object is used to extract the keys as expected.
 *
 * @note Defined Object
 * Since TypeScript `enum` can be inconvenient to work with, this app use define their own enum-like `objects` with `readonly` properties.
 *
 * @example
 * ```ts
 * import { Enums} from '@kinbay/utiljs';
 * const logLevel = Enums.ELogLevel.WARN;
 * console.log(loglevel); // 'WARN'
 * ```
 *
 * @enum
 * @category Logger
 */

export const ELogLevel = {
	/** - Error log level. */
	ERROR: 'ERROR',
	/** - Warning log level. */
	WARN: 'WARN',
	/** - Success log level. */
	SUCCESS: 'SUCCESS',
	/** - Information log level. */
	INFO: 'INFO',
	/** - Debug log level. */
	DEBUG: 'DEBUG'
} as const;
