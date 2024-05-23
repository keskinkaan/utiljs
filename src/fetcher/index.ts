import { Logger } from '../logger/index';

export class Fetcher {
	private apiUrl: string;
	private apiKey?: string;
	private requestInit: RequestInit;
	private logger: Logger;
	private headers: Record<string, string>;

	constructor(apiUrl: string, apiKey?: string) {
		this.apiUrl = apiUrl;
		this.apiKey = apiKey;
		this.requestInit = {};
		this.logger = new Logger();
		this.headers = {
			'accept': 'application/json, text/plain, */*',
			'cache-control': 'no-cache',
			'content-type': 'application/json'
		};
	}

	public async post<T, R extends object>(
		body: T,
		controller: AbortController | null = null,
		timeout: number = 5000
	) {
		let apiUrl = this.apiUrl;
		this.requestInit.method = 'POST';
		this.requestInit.headers = this.headers;

		if (this.apiKey) {
			apiUrl = `${this.apiUrl}?apiKey=${this.apiKey}`;
		}

		this.requestInit.body = JSON.stringify(body);

		if (controller === null) controller = new AbortController();
		const id = setTimeout(() => controller?.abort(), timeout);
		this.requestInit.signal = controller.signal;

		const response = await fetch(apiUrl, this.requestInit);

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
		let apiUrl = this.apiUrl;
		this.requestInit.method = 'GET';
		this.requestInit.headers = this.headers;

		if (this.apiKey) {
			apiUrl = `${apiUrl}?apiKey=${this.apiKey}`;
		}

		if (controller === null) controller = new AbortController();
		const id = setTimeout(() => controller?.abort(), timeout);
		this.requestInit.signal = controller.signal;

		const response = await fetch(`${apiUrl}`, this.requestInit);

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
		let apiUrl = this.apiUrl;
		this.requestInit.method = 'DELETE';
		this.requestInit.headers = this.headers;

		if (this.apiKey) {
			apiUrl = `${apiUrl}?apiKey=${this.apiKey}`;
		}

		if (controller === null) controller = new AbortController();
		const id = setTimeout(() => controller?.abort(), timeout);
		this.requestInit.signal = controller.signal;

		const response = await fetch(`${apiUrl}`, this.requestInit);

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

	public async put<T, R extends object>(
		body: T,
		controller: AbortController | null = null,
		timeout: number = 5000
	) {
		let apiUrl = this.apiUrl;
		this.requestInit.method = 'PUT';
		this.requestInit.headers = this.headers;

		if (this.apiKey) {
			apiUrl = `${this.apiUrl}?apiKey=${this.apiKey}`;
		}

		this.requestInit.body = JSON.stringify(body);

		if (controller === null) controller = new AbortController();
		const id = setTimeout(() => controller?.abort(), timeout);
		this.requestInit.signal = controller.signal;

		const response = await fetch(apiUrl, this.requestInit);

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
