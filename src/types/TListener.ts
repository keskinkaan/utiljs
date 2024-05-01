/* eslint-disable no-unused-vars */
/**
 * ### Typeof Listener
 * @since 0.6.0
 *
 * @description
 * Type of function that listens for events.
 *
 * @typeParam T The identity type
 * @param args The arguments to be passed to the listener.``
 *
 * @category Listeners
 */
export type TListener<T extends Array<unknown>> = (...args: T) => void;
