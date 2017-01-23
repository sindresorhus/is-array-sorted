'use strict';
module.exports = (arr, comp) => {
	for (let i = 0; i < arr.length - 1; i++) {
		const a = arr[i];
		const b = arr[i + 1];

		if (comp ? comp(a, b) > 0 : a > b) {
			return false;
		}
	}

	return true;
};
