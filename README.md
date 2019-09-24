# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @darrenni_/lotide`

**Require it:**

`const _ = require('@darrenni_/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters`: returns an object with the number of occurrences for each.
* `countOnly`: returns the number of occurrences of each letter.
* `eqArrays`: tests if two arrays are the same.
* `eqObjects`: tests if two objects are the same.
* `findKey`: returns the key associated with given object.
* `findKeyByValue`: returns the key associated with given value in object.
* `flatten`: returns a flat array of the same elements.
* `head`: returns the first element in array.
* `letterPositions`: returns an object with an array of positions for each in string.
* `map`: return an array with the callback applied.
* `middle`: return the middle element of an array. If the array is even, it will return both middle ones.
* `tail`: returns the last element of an array.
* `takeUntil`: return all elements up to a match.
* `without`: returns a new array without excluded elements.