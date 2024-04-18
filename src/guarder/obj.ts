import { TGuard } from '../types';

/**
 * ### Object Guard
 * @since 0.4.0
 *
 * @description
 * This function is a guard that checks if the given value is a `object`.
 * If the given value is a `object`, it will be returns the given value back.
 * If the sent value is not a `object`, it will be throws an error.
 *
 * @typeParam T The type of the object that will be checked.
 * @param inn The type of the function that checks the type of value sent.
 * @returns Returns the value if the submitted value matches the `T` type. If the submitted value does not match the `T` type, it throws an error.
 *
 * @throws If the value is not a `object`, it will be throws an error.
 *
 * @example
 * ```ts
 * import { Guarder } from '@kinbay/utiljs';
 *
 * const envSchema = Guarder.obj({
 *  PG_USER: Guarder.str,
 *  PG_PASS: Guarder.str,
 *  PG_HOST: Guarder.str,
 *  PG_PORT: Guarder.num,
 *  PG_DB: Guarder.str,
 * });
 *
 * export const envConfig = envSchema(process.env);
 * ```
 */

export const obj = <T extends Record<string, TGuard<unknown>>>(inn: T) => {
	return (v: unknown) => {
		if (typeof v !== 'object' || v === null) {
			throw new Error(`The ${v as string} is a not object`);
		}

		const out = {} as { [K in keyof T]: ReturnType<T[K]> };
		for (const k in inn) {
			if (Object.prototype.hasOwnProperty.call(inn, k)) {
				out[k] = inn[k]((v as { [key: string]: unknown })[k]) as ReturnType<
					T[typeof k]
				>;
			}
		}

		return out;
	};
};
