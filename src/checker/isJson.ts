import { isArr } from './isArr';
import { isBeJson } from './isBeJson';
import { isObj } from './isObj';

/**
 * ### Is Json
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
 * const f = '{true}';
 * const g = '{}'
 * console.log(Checker.isJson(a)); // true
 * console.log(Checker.isJson(b)); // true
 * console.log(Checker.isJson(c)); // false
 * console.log(Checker.isJson(d)); // false
 * console.log(Checker.isJson(e)); // false
 * console.log(Checker.isJson(f)); // false
 * console.log(Checker.isJson(g)); // false // because value g.length is zero
 * ```
 *
 * @category Checker
 */
export const isJson = (v: unknown) => {
	if (typeof v !== 'string' || !isBeJson(v)) return false;
	try {
		return isArr(JSON.parse(v)) || isObj(JSON.parse(v), true);
	} catch (e) {
		return false;
	}
};
