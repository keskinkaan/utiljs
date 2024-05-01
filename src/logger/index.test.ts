//? Ignore the following rules for testing files, as they are not actual code
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty-function */

import { Logger } from './index';

describe('Logger test is running', () => {
	let originalConsoleLog: any;

	beforeEach(() => {
		// Mock console.log to capture log messages
		originalConsoleLog = console.log;
		console.log = jest.fn();
	});

	afterEach(() => {
		// Restore original console.log after each test
		console.log = originalConsoleLog;
	});

	it('should log a message with INFO level by default', () => {
		const logger = new Logger();
		const logSpy = jest.spyOn(global.console, 'log');
		logger.log('Test message');
		expect(logSpy).toHaveBeenCalled();
	});

	it('should log a message with the specified namespace', () => {
		const logger = new Logger();
		const logSpy = jest.spyOn(global.console, 'log');
		logger.log('Test message', 'ERROR', 'CustomNamespace');
		expect(logSpy).toHaveBeenCalled();
	});

	it('should log an object message correctly', () => {
		const logger = new Logger();
		const logSpy = jest.spyOn(global.console, 'log');
		logger.log({ key: 'value' }, 'DEBUG');
		expect(logSpy).toHaveBeenCalled();
	});

	it('should log an Error message with stack trace', () => {
		const logger = new Logger();
		const error = new Error('Test error');
		const logSpy = jest.spyOn(global.console, 'log');
		logger.log(error, 'ERROR');
		expect(logSpy).toHaveBeenCalled();
	});

	it('should log an ERROR message correctly', () => {
		const logger = new Logger();
		const logSpy = jest.spyOn(global.console, 'log');
		logger.log('Error message', 'ERROR');
		expect(logSpy).toHaveBeenCalled();
	});

	it('should log a message with ERROR level and SLIENT state', () => {
		const logger = new Logger(0);
		const logSpy = jest.spyOn(global.console, 'log');
		logger.log('Test message', 'ERROR');
		expect(logSpy).toHaveBeenCalledTimes(0);
	});

	it('should log a WARN message correctly', () => {
		const logger = new Logger();
		const logSpy = jest.spyOn(global.console, 'log');
		logger.log({ key: 'value' }, 'WARN');
		expect(logSpy).toHaveBeenCalled();
	});

	it('should log a message with WARN level and ERROR state', () => {
		const logger = new Logger(1);
		const logSpy = jest.spyOn(global.console, 'log');
		logger.log('Test message', 'WARN');
		expect(logSpy).toHaveBeenCalledTimes(0);
	});

	it('should log a INFO message correctly', () => {
		const logger = new Logger();
		const logSpy = jest.spyOn(global.console, 'log');
		logger.log({ key: 'value' }, 'INFO');
		expect(logSpy).toHaveBeenCalled();
	});

	it('should log a message with INFO level and WARN state', () => {
		const logger = new Logger(2);
		const logSpy = jest.spyOn(global.console, 'log');
		logger.log('Test message', 'INFO');
		expect(logSpy).toHaveBeenCalledTimes(0);
	});

	it('should log a SUCCESS message correctly', () => {
		const logger = new Logger();
		const logSpy = jest.spyOn(global.console, 'log');
		logger.log({ key: 'value' }, 'SUCCESS');
		expect(logSpy).toHaveBeenCalled();
	});

	it('should log a message with SUCCESS level and INFO state', () => {
		const logger = new Logger(3);
		const logSpy = jest.spyOn(global.console, 'log');
		logger.log('Test message', 'SUCCESS');
		expect(logSpy).toHaveBeenCalledTimes(0);
	});

	it('should log a DEBUG message correctly', () => {
		const logger = new Logger();
		const logSpy = jest.spyOn(global.console, 'log');
		logger.log({ key: 'value' }, 'DEBUG');
		expect(logSpy).toHaveBeenCalled();
	});

	it('should log a message with DEBUG level and SUCCESS state', () => {
		const logger = new Logger(4);
		const logSpy = jest.spyOn(global.console, 'log');
		logger.log('Test message', 'DEBUG');
		expect(logSpy).toHaveBeenCalledTimes(0);
	});

	it('should log a message with DEBUG level and DEBUG state', () => {
		const logger = new Logger(5);
		const logSpy = jest.spyOn(global.console, 'log');
		logger.log('Test message', 'DEBUG');
		expect(logSpy).toHaveBeenCalled();
	});
});
