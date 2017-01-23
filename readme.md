# is-array-sorted [![Build Status](https://travis-ci.org/sindresorhus/is-array-sorted.svg?branch=master)](https://travis-ci.org/sindresorhus/is-array-sorted)

> Check if an Array is sorted


## Install

```
$ npm install --save is-array-sorted
```


## Usage

```js
const isArraySorted = require('is-array-sorted');

isArraySorted([1, 2, 3]);
//=> true

isArraySorted([1, 3, 2]);
//=> false

isArraySorted(['a', 'b', 'c']);
//=> true
```


## API

### isArraySorted(input, [comparator])

Returns a boolean.

#### input

Type: `Array`

Array to check.

#### comparator

Type: `Function`<br>
Default: Ascending order (`(a, b) => a - b`)

Same as [`Array#sort(comparator)`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description).


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
