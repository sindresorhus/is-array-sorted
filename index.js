'use strict';
module.exports = (arr, comp = (a, b) => Number(a > b)) => {
	for (let i = 0; i < arr.length - 1; i++) {
		if (comp(arr[i], arr[i + 1]) > 0) {
			return false;
		}
	}

	return true;
};
