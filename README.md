# reutilize

A collection of helper functions designed to be small, fast, and without side effects.

It puts a special emphasis on functions related to string manipulation and object iteration, since these seem to be the things I end up writing utility functions for in almost every project I work on.

## API

<!--BEGIN_API_DOCS-->
### `any`
[source](/src/any.js)
Returns true if `predicate` returns truthy for any element in
`array`, and false otherwise.

```js
const yep = any(n => n > 5)([1, 5, 10, 20]);
const nope = any(n => n < 5)([20, 40, 60]);
```

### `asArray`
[source](/src/asArray.js)

### `at`
[source](/src/at.js)



### `clamp`
[source](/src/clamp.js)

### `compact`
[source](/src/compact.js)

### `compose`
[source](/src/compose.js)

### `entries`
[source](/src/entries.js)

### `escapeRegExp`
[source](/src/escapeRegExp.js)

### `every`
[source](/src/every.js)

### `filter`
[source](/src/filter.js)

### `filterLines`
[source](/src/filterLines.js)

### `forEach`
[source](/src/forEach.js)

### `get`
[source](/src/get.js)

### `hasProp`
[source](/src/hasProp.js)

### `identity`
[source](/src/identity.js)

### `isEmpty`
[source](/src/isEmpty.js)

### `isFalsy`
[source](/src/isFalsy.js)

### `isTruthy`
[source](/src/isTruthy.js)

### `isWhitespace`
[source](/src/isWhitespace.js)

### `join`
[source](/src/join.js)

### `keys`
[source](/src/keys.js)

### `last`
[source](/src/last.js)

### `lines`
[source](/src/lines.js)

### `map`
[source](/src/map.js)

### `mapEntries`
[source](/src/mapEntries.js)

### `mapKeys`
[source](/src/mapKeys.js)

### `mapLines`
[source](/src/mapLines.js)

### `mapValues`
[source](/src/mapValues.js)

### `none`
[source](/src/none.js)

### `noop`
[source](/src/noop.js)

### `not`
[source](/src/not.js)

### `padEnd`
[source](/src/padEnd.js)

### `padStart`
[source](/src/padStart.js)

### `pipe`
[source](/src/pipe.js)

### `randomFloat`
[source](/src/randomFloat.js)

### `randomHexString`
[source](/src/randomHexString.js)

### `randomInt`
[source](/src/randomInt.js)

### `randomRgbString`
[source](/src/randomRgbString.js)

### `range`
[source](/src/range.js)

### `repeat`
[source](/src/repeat.js)

### `replaceBetween`
[source](/src/replaceBetween.js)

### `size`
[source](/src/size.js)

### `sleep`
[source](/src/sleep.js)

### `slice`
[source](/src/slice.js)

### `splitOn`
[source](/src/splitOn.js)

### `stringHash`
[source](/src/stringHash.js)

### `template`
[source](/src/template.js)

### `unlines`
[source](/src/unlines.js)

### `values`
[source](/src/values.js)

### `wrap`
[source](/src/wrap.js)
<!--END_API_DOCS-->
