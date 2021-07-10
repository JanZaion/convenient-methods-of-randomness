# Convenient Methods of Randomness

A set of convenience methods for random number generation in node.js.

## Install

`npm i convenient-methods-of-randomness`

## Example Usage

```
const dice = require('convenient-methods-of-randomness');
const zeroToFour = dice.int(5);
```

## Methods

`int(integer)` returns any integer in the 0 to integer-1 range.  
`boolean(probability)` returns random boolean value based on the probability input. 0.1 means 10% chance of true.  
`range(max, min)` returns any integer in the min to max-1 range. The max integer is excluded, so a roll for 2-8 would look like this: range(9, 2). The same exclusion of max applies to all the methods using max.  
`multiRollUniqueSortedAscending(max, min, rolls)` multiple dice rolls, returns an array of unique ascending different integer that is as long as the 'rolls' input.  
`multiRollSortedAscending(max, min, rolls)` multiple dice rolls, returns an array of ascending different integers that is as long as the 'rolls' input.  
`multiRollUniqueSortedDescending(max, min, rolls)` multiple dice rolls, returns an array of unique descending different integers that is as long as the 'rolls' input.  
`multiRollSortedDescending(max, min, rolls)` multiple dice rolls, returns an array of descending different integers that is as long as the 'rolls' input.  
`multiRollUniqueUnsorted(max, min, rolls)` multiple dice rolls, returns an array of unique unsorted integers that is as long as the 'rolls' input.  
`multiRollUnsorted(max, min, rolls)` multiple dice rolls, returns an array of unsorted integers that is as long as the 'rolls' input.
