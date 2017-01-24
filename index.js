'use strict';

const defaultComparator = (a, b) => a > b;
module.exports = (arr, comp) => {
	if (!Array.isArray(arr)) {
		return false;
	}
	comp = comp || defaultComparator;
	var a = arr[0];
	for (var i = 1, len = arr.length; i < len; i++) {
		var b = arr[i];
		if (comp(a, b)) {
			return false;
		}
		a = b;
	}

	return true;
};
