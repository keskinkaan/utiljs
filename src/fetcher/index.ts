import type { TFetcherOptions } from '../types';
import { Logger } from '../logger/index';

export class Fetcher {
	private apiUrl: string;
	private requestInit: RequestInit;
	private logger: Logger;
	private headers: Record<string, string>;
	private options: TFetcherOptions | undefined;

	constructor(apiUrl: string, options?: TFetcherOptions) {
		this.apiUrl = apiUrl;
		this.requestInit = {};
		this.logger = new Logger();
		this.headers = {
			'accept': 'application/json, text/plain, */*',
			'cache-control': 'no-cache',
			'content-type': 'application/json'
		};
		this.options = options;
		if (this.options?.token) {
			this.headers = {
				...this.headers,
				...{ authorization: `Bearer ${this.options.token}` }
			};
		}
	}

	public async post<T, R extends object>(
		body: T,
		controller: AbortController | null = null,
		timeout: number = 5000
	) {
		this.requestInit.method = 'POST';
		this.requestInit.headers = this.headers;

		this.requestInit.body = JSON.stringify(body);

		if (controller === null) controller = new AbortController();
		const id = setTimeout(() => controller?.abort(), timeout);
		this.requestInit.signal = controller.signal;

		const response = await fetch(this.apiUrl, this.requestInit);

		try {
			if (response.ok) {
				const responseBody = (await response.json()) as R;
				if (
					'statusCode' in responseBody &&
					responseBody.statusCode !== 'SUCCESS'
				) {
					this.logger.log(
						responseBody.statusCode,
						'ERROR',
						'Fetcher > post > responseBody'
					);
					return undefined;
				}
				return responseBody;
			} else {
				this.logger.log(
					response.statusText,
					'ERROR',
					'Fetcher > post > statusText'
				);
				return undefined;
			}
		} catch (err: unknown) {
			this.logger.log(err, 'ERROR', 'Fetcher > post > catch');
			return undefined;
		} finally {
			clearTimeout(id);
			controller = null;
		}
	}

	public async get<R extends object>(
		controller: AbortController | null = null,
		timeout: number = 15000
	) {
		this.requestInit.method = 'GET';
		this.requestInit.headers = this.headers;

		if (controller === null) controller = new AbortController();
		const id = setTimeout(() => controller?.abort(), timeout);
		this.requestInit.signal = controller.signal;

		const response = await fetch(this.apiUrl, this.requestInit);

		try {
			if (response.ok) {
				const responseBody = (await response.json()) as R;
				if (
					'statusCode' in responseBody &&
					responseBody.statusCode !== 'SUCCESS'
				) {
					this.logger.log(
						responseBody.statusCode,
						'ERROR',
						'Fetcher > get > responseBody'
					);
					return undefined;
				}
				return responseBody;
			} else {
				this.logger.log(
					response.statusText,
					'ERROR',
					'Fetcher > get > statusText'
				);
				return undefined;
			}
		} catch (err: unknown) {
			this.logger.log(err, 'ERROR', 'Fetcher > get > catch');
			return undefined;
		} finally {
			clearTimeout(id);
			controller = null;
		}
	}

	public async delete<R extends object>(
		controller: AbortController | null = null,
		timeout: number = 5000
	) {
		this.requestInit.method = 'DELETE';
		this.requestInit.headers = this.headers;

		if (controller === null) controller = new AbortController();
		const id = setTimeout(() => controller?.abort(), timeout);
		this.requestInit.signal = controller.signal;

		const response = await fetch(this.apiUrl, this.requestInit);

		try {
			if (response.ok) {
				const responseBody = (await response.json()) as R;
				if (
					'statusCode' in responseBody &&
					responseBody.statusCode !== 'SUCCESS'
				) {
					this.logger.log(
						responseBody.statusCode,
						'ERROR',
						'Fetcher > delete > responseBody'
					);
					return undefined;
				}
				return responseBody;
			} else {
				this.logger.log(
					response.statusText,
					'ERROR',
					'Fetcher > delete > statusText'
				);
				return undefined;
			}
		} catch (err: unknown) {
			this.logger.log(err, 'ERROR', 'Fetcher > delete > catch');
			return undefined;
		} finally {
			clearTimeout(id);
			controller = null;
		}
	}

	public async patch<T, R extends object>(
		body: T,
		controller: AbortController | null = null,
		timeout: number = 5000
	) {
		this.requestInit.method = 'PATCH';
		this.requestInit.headers = this.headers;

		this.requestInit.body = JSON.stringify(body);

		if (controller === null) controller = new AbortController();
		const id = setTimeout(() => controller?.abort(), timeout);
		this.requestInit.signal = controller.signal;

		const response = await fetch(this.apiUrl, this.requestInit);

		try {
			if (response.ok) {
				const responseBody = (await response.json()) as R;
				if (
					'statusCode' in responseBody &&
					responseBody.statusCode !== 'SUCCESS'
				) {
					this.logger.log(
						responseBody.statusCode,
						'ERROR',
						'Fetcher > put > responseBody'
					);
					return undefined;
				}
				return responseBody;
			} else {
				this.logger.log(
					response.statusText,
					'ERROR',
					'Fetcher > put > statusText'
				);
				return undefined;
			}
		} catch (err: unknown) {
			this.logger.log(err, 'ERROR', 'Fetcher > put > catch');
			return undefined;
		} finally {
			clearTimeout(id);
			controller = null;
		}
	}
}
