/* eslint-disable no-console */
import type { TLogLevel, TLogState } from '../types/TLogger';
import { ELogLevel, ELogState } from '../enums';

/**
 * ### Logger
 * @since 0.5.0
 *
 * @description
 * The `Logger` class is used to log messages to the console.
 *
 * @example
 * ```ts
 * import { Logger } from '@kinbay/utiljs';
 * const logger = new Logger();
 * logger.log('Hello World', 'INFO', 'APP');
 * ```
 *
 * @category Logger
 */
export class Logger {
	private isNode = () =>
		typeof process !== 'undefined' &&
		!!process.versions &&
		!!process.versions.node;
	private nameSpace = 'APP';
	private logLevel: TLogLevel = ELogLevel.INFO;
	private logState: TLogState;
	private message: unknown = '';
	private consoleText: string | null = null;
	// colors
	private color: string = 'color: SkyBlue';
	private colorSlateGray: string = 'color: SlateGrey';
	private colorWhite: string = 'color: white';

	constructor(logState: TLogState | null = null) {
		if (logState !== null) {
			this.logState = logState;
		} else {
			this.logState = ELogState.Debug;
		}
	}

	private fd(): string {
		const dt = new Date();
		return `${String(dt.getHours()).padStart(2, '0')}:${String(
			dt.getMinutes()
		).padStart(2, '0')}:${String(dt.getSeconds()).padStart(2, '0')}.${String(
			dt.getMilliseconds()
		).padStart(3, '0')}`;
	}

	public log(
		msg: unknown,
		logLevel: TLogLevel = ELogLevel.INFO,
		nameSpace = 'APP'
	) {
		this.nameSpace = nameSpace;
		switch (logLevel) {
			case ELogLevel.ERROR:
				if (this.logState >= ELogState.Error) {
					this.logLevel = ELogLevel.ERROR;
					if (this.isNode()) {
						this.consoleText = `[\u001b[38;5;196mError\u001b[0m][\u001b[38;5;247m${this.fd()}\u001b[0m][\u001b[38;5;196m${nameSpace}\u001b[0m]`;
					} else {
						this.consoleText = null;
						this.color = 'color: IndianRed';
					}
					this.setLog(msg, this.consoleText);
				}
				break;
			case ELogLevel.WARN:
				if (this.logState >= ELogState.Warn) {
					this.logLevel = ELogLevel.WARN;
					if (this.isNode()) {
						this.consoleText = `[\u001b[38;5;214mWarn\u001b[0m][\u001b[38;5;247m${this.fd()}\u001b[0m][\u001b[38;5;214m${nameSpace}\u001b[0m]`;
					} else {
						this.consoleText = null;
						this.color = 'color: GoldenRod';
					}
					this.setLog(msg, this.consoleText);
				}
				break;
			case ELogLevel.INFO:
				if (this.logState >= ELogState.Info) {
					this.logLevel = ELogLevel.INFO;
					if (this.isNode()) {
						this.consoleText = `[\u001b[38;5;75mInfo\u001b[0m][\u001b[38;5;247m${this.fd()}\u001b[0m][\u001b[38;5;75m${nameSpace}\u001b[0m]`;
					} else {
						this.consoleText = null;
						this.color = 'color: SkyBlue';
					}
					this.setLog(msg, this.consoleText);
				}
				break;
			case ELogLevel.SUCCESS:
				if (this.logState >= ELogState.Success) {
					this.logLevel = ELogLevel.SUCCESS;
					if (this.isNode()) {
						this.consoleText = `[\u001b[38;5;49mSuccess\u001b[0m][\u001b[38;5;247m${this.fd()}\u001b[0m][\u001b[38;5;49m${nameSpace}\u001b[0m]`;
					} else {
						this.consoleText = null;
						this.color = 'color: SpringGreen';
					}
					this.setLog(msg, this.consoleText);
				}
				break;
			case ELogLevel.DEBUG:
				if (this.logState >= ELogState.Debug) {
					this.logLevel = ELogLevel.DEBUG;
					if (this.isNode()) {
						this.consoleText = `[\u001b[38;5;33mDebug\u001b[0m][\u001b[38;5;247m${this.fd()}\u001b[0m][\u001b[38;5;33m${nameSpace}\u001b[0m]`;
					} else {
						this.consoleText = null;
						this.color = 'color: violet';
					}
					this.setLog(msg, this.consoleText);
				}
				break;
		}
	}

	private setLog(msg: unknown, consoleText: string | null) {
		this.message = msg instanceof Error ? `${msg.message}\n ${msg.stack}` : msg;
		if (consoleText !== null) {
			console.log(`${consoleText} ${this.message as string}`);
		} else {
			if (
				typeof this.message === 'string' ||
				typeof this.message === 'number' ||
				typeof this.message === 'boolean'
			) {
				console.log(
					`[%c${this.logLevel}%c][%c${this.fd()}%c][%c${this.nameSpace}%c] ${this.message}`,
					this.color,
					this.colorWhite,
					this.colorSlateGray,
					this.colorWhite,
					this.color,
					this.colorWhite
				);
			} else {
				console.log(
					`[%c${this.logLevel}%c][%c${this.fd()}%c][%c${this.nameSpace}%c]`,
					this.color,
					this.colorWhite,
					this.colorSlateGray,
					this.colorWhite,
					this.color,
					this.colorWhite,
					this.message
				);
			}
		}
	}
}
