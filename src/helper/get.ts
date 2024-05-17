/**
 * ### Get value from object by path
 * @since 0.6.0
 *
 * @description
 * Get value from object by path with default value
 *
 * @param obj Object to get value from
 * @param path Path to get value from
 * @param defValue Default value if value is not found
 * @returns Value from object by path or default value
 *
 * @example
 * ```ts
 * import { Helper } from '@kinbay/utiljs';
 *
 * const obj = {
 *  user: {
 *    id: 1,
 *    name: 'John Doe',
 *  },
 * };
 *
 * const value = Helper.get(obj, 'user.name', 'Anonymous');
 * console.log(value); // Output: John Doe
 * ```
 *
 * @category Helper
 */
export function get(
	obj: Record<string, unknown>,
	path: string | Array<string>,
	defValue?: unknown
): unknown {
	if (!path) return defValue;

	const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);
	if (!pathArray) return defValue;

	const result = pathArray.reduce<unknown>((prevObj, key) => {
		if (prevObj && typeof prevObj === 'object' && key in prevObj) {
			return (prevObj as Record<string, unknown>)[key];
		}
		return undefined;
	}, obj);

	return result === undefined ? defValue : result;
}
