'use strict';
module.exports = (array, options = {}) => {
	const compare = options.comparator ?
		(left, right) => options.comparator(left, right) > 0 :
		(left, right) => left > right;

	for (let i = 0; i < array.length - 1; i++) {
		const left = array[i];
		const right = array[i + 1];

		if (compare(left, right)) {
			return false;
		}
	}

	return true;
};
