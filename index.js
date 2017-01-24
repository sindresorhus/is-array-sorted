'use strict';

const defaultComparator = (a, b) => a > b ? 1 : 0;
module.exports = (arr, comp) => {
	// pass only iterable objects
	if (!arr || typeof arr[Symbol.iterator] !== 'function') {
		return false;
	}
	comp = comp || defaultComparator;
	var a = arr[0];
	for (var i = 1, len = arr.length; i < len; i++) {
		var b = arr[i];
		if (comp(a, b) > 0) {
			return false;
		}
		a = b;
	}

	return true;
};
