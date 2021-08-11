export default function isArraySorted(array, {comparator} = {}) {
	const compare = comparator
		? (left, right) => comparator(left, right) > 0
		: (left, right) => left > right;

	for (const [index, element] of array.entries()) {
		if (compare(element, array[index + 1])) {
			return false;
		}
	}

	return true;
}
