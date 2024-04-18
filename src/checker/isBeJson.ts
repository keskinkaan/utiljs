/**
 * ### Is Be Json
 * @since 0.3.0
 *
 * @description
 * This function is a checker that checks if the given value is a `json`.
 * If the given value is a `json`, it will be returns `true`.
 * If the given value is not a `json`, it will be returns `false`.
 *
 * @param v Value unknown
 * @returns If the given value is a `json`, it will be returns `true`. If the given value is not a `json`, it will be returns `false`.
 *
 * @example
 * ```ts
 * import { Checker } from '@kinbay/utiljs';
 *
 * const a = '{"a":"a"}';
 * const b = [{"a":"a"}, {"b":"b"}];
 * const c = 'a';
 * const d = '"a":"a"}';
 * const e = '[{"a":"a"}, {"b":"b"}';
 * console.log(Checker.isBeJson(a)); // true
 * console.log(Checker.isBeJson(b)); // true
 * console.log(Checker.isBeJson(c)); // false
 * console.log(Checker.isBeJson(d)); // false
 * console.log(Checker.isBeJson(e)); // false
 * ```
 *
 * @category Checker
 */
export const isBeJson = (v: unknown) => {
	if (typeof v === 'string') {
		const str = v.trim();
		return (
			(str.startsWith('{') && str.endsWith('}')) ||
			(str.startsWith('[') && str.endsWith(']'))
		);
	}
	return false;
};
