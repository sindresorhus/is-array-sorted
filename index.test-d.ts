import {expectType} from 'tsd';
import isArraySorted = require('.');

expectType<boolean>(isArraySorted([1, 2, 3]));
expectType<boolean>(
	isArraySorted(['a', 'b', 'c'], {
		comparator(left, right) {
			expectType<string>(left);
			expectType<string>(right);

			return left.localeCompare(right);
		}
	})
);
