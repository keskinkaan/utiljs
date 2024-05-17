import { EventEmitter } from './index';

describe('EventEmitter', () => {
	let emitter: EventEmitter<{ testEvent: [number, string] }>;

	beforeEach(() => {
		emitter = new EventEmitter();
	});

	it('should add listener to event', () => {
		const listener = jest.fn();
		emitter.on('testEvent', listener);
		expect(emitter['eventListeners']['testEvent']).toBeDefined();
		expect(emitter['eventListeners']['testEvent']).toContain(listener);
	});

	it('should emit event with arguments', () => {
		const listener = jest.fn();
		emitter.on('testEvent', listener);
		emitter.emit('testEvent', 42, 'hello');
		expect(listener).toHaveBeenCalledWith(42, 'hello');
	});

	it('should remove listener from event', () => {
		const listener = jest.fn();
		emitter.on('testEvent', listener);
		emitter.off('testEvent', listener);
		expect(emitter['eventListeners']['testEvent']).toBe(undefined);
	});

	it('should remove all listeners from event', () => {
		const listener1 = jest.fn();
		const listener2 = jest.fn();
		emitter.on('testEvent', listener1);
		emitter.on('testEvent', listener2);
		emitter.offAll('testEvent');
		expect(emitter['eventListeners']['testEvent']).toBeUndefined();
	});

	it('should not throw error when removing listener from non-existing event', () => {
		const listener = jest.fn();
		expect(() => emitter.off('testEvent', listener)).not.toThrow();
	});
});
