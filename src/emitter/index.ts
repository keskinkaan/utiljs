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
		if (!this.eventListeners[eventName]) {
			this.eventListeners[eventName] = new Set();
		}
		this.eventListeners[eventName]!.add(listener);
	}

	public emit<K extends keyof EventMap>(eventName: K, ...args: EventMap[K]) {
		const listeners = this.eventListeners[eventName];
		if (listeners) {
			for (const listener of listeners) {
				listener(...args);
			}
		}
	}

	public off<K extends keyof EventMap>(
		eventName: K,
		listener: TListener<EventMap[K]>
	) {
		const listeners = this.eventListeners[eventName];
		if (listeners) {
			listeners.delete(listener);
			if (listeners.size === 0) {
				delete this.eventListeners[eventName];
			}
		}
	}

	public offAll<K extends keyof EventMap>(eventName: K) {
		if (this.eventListeners[eventName]) {
			delete this.eventListeners[eventName];
		}
	}
}
