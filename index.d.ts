export interface Options<T> {
	/**
	Same as [`Array#sort(comparator)`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description).

	@default (a, b) => a - b
	*/
	comparator: (left: T, right: T) => number;
}

/**
Check if an array is sorted.

@example
```
import isArraySorted from 'is-array-sorted';

isArraySorted([1, 2, 3]);
//=> true

isArraySorted([1, 3, 2]);
//=> false

isArraySorted(['a', 'b', 'c']);
//=> true
```
*/
export default function isArraySorted<T>(
	array: readonly T[],
	options?: Options<T>
): boolean;
