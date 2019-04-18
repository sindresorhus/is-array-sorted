import test from 'ava';
import isArraySorted from '.';

test('main', t => {
	t.true(isArraySorted([1, 2, 3, 4]));
	t.true(isArraySorted([1, 1, 1, 4]));
	t.true(isArraySorted(['a', 'b', 'c']));
	t.true(isArraySorted(['cb', 'skip']));

	t.false(isArraySorted([1, 1, 3, 2]));
	t.false(isArraySorted([1, 3, 4, 2]));
	t.false(isArraySorted(['skip', 'cb']));

	t.true(isArraySorted([4, 3, 2, 1], {comparator: (a, b) => b - a}));
	t.false(isArraySorted([1, 3, 4, 2], {comparator: (a, b) => b - a}));
});
