import test from 'ava';
import m from './';

test('main', t => {
	t.true(m([1, 2, 3, 4]));
	t.true(m([1, 1, 1, 4]));
	t.true(m(['a', 'b', 'c']));
	t.true(m(['cb', 'skip']));

	t.false(m([1, 1, 3, 2]));
	t.false(m([1, 3, 4, 2]));
	t.false(m(['skip', 'cb']));

	t.true(m([4, 3, 2, 1], (a, b) => b - a));
	t.false(m([1, 3, 4, 2], (a, b) => b - a));
});
