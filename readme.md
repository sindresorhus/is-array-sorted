# is-array-sorted

> Check if an array is sorted


## Install

```
$ npm install is-array-sorted
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

### isArraySorted(array, options?)

Returns a `boolean`.

#### array

Type: `unknown[]`

Array to check.

#### options

Type: `object`

##### comparator

Type: `Function`<br>
Default: Ascending order (`(a, b) => a - b`)

Same as [`Array#sort(comparator)`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description).
