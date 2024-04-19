import type { TOV } from './TTypeOfValue';
import { ELogLevel, ELogState } from '../enums';

//#region ELogState
/**
 * ### Typeof Log Level
 * @since 0.5.0
 *
 * @description
 * The `TLogLevel` type correctly references the `ELogLevel` object to extract the keys as expected.
 * When use the `TLogLevel` type, it will give you the union of all the value types in the object `ELogLevel`. {@link ELogLevel | Please click for more information}
 *
 * @example
 * ```ts
 * TLogLevel = 'ERROR' | 'WARN' | 'SUCCESS' | 'INFO' | 'DEBUG'
 * ```
 *
 * @category Logger
 */
export type TLogLevel = TOV<typeof ELogLevel>;
//#endregion ELogState

//#region TLogState
/**
 * ### Typeof LogState
 * @since 0.5.0
 *
 * @description
 * The `TLogState` type correctly references the `ELogState` object to extract the keys as expected.
 * When use the `TLogState` type, it will give you the union of all the value types in the object `ELogState`. {@link ELogState | Please click for more information}
 *
 * @example
 * ```ts
 * TLogState = 'Silent' | 'Error' | 'Warn' | 'Info' | 'Success' | 'Debug'
 * ```
 *
 * @category Logger
 */
export type TLogState = TOV<typeof ELogState>;
//#endregion TLogState
