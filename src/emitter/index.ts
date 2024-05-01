import type { TListener } from '../types';

/**
 * ### Event Emitter
 * @since 0.6.0
 *
 * @description
 * The `EventEmitter` class is a simple implementation of the observer pattern. It allows you to subscribe to events and emit them.
 *
 * @example
 * ```ts
 * import { EventEmitter } from '@kinbay/utiljs';
 *
 * type User = {
 *  id: number;
 *  name: string;
 * };
 *
 * type EventMapper = {
 *  login: [user: User];
 *  logout: [number];
 * };
 *
 * const userAuthEmitter = new EventEmitter<EventMapper>();
 * userAuthEmitter.on('login', (user) => {});
 * userAuthEmitter.emit('login', ({id: '', name: ''}));
 * userAuthEmitter.emit('logout');
 * ```
 *
 * @category EventEmiter
 */
export class EventEmitter<EventMap extends Record<string, Array<unknown>>> {
	private eventListeners: {
		[K in keyof EventMap]?: Set<TListener<EventMap[K]>>;
	} = {};

	public on<K extends keyof EventMap>(
		eventName: K,
		listener: TListener<EventMap[K]>
	) {
		const listeners = this.eventListeners[eventName] ?? new Set();
		listeners.add(listener);
		this.eventListeners[eventName] = listeners;
	}

	public emit<K extends keyof EventMap>(eventName: K, ...args: EventMap[K]) {
		const listeners = this.eventListeners[eventName] ?? new Set();
		for (const listener of listeners) {
			listener(...args);
		}
	}

	public off<K extends keyof EventMap>(
		eventName: K,
		listener: TListener<EventMap[K]>
	) {
		const listeners = this.eventListeners[eventName];
		if (listeners) {
			listeners.delete(listener);
		}
	}

	public offAll<K extends keyof EventMap>(eventName: K) {
		delete this.eventListeners[eventName];
	}
}
