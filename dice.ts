/**
 * Returns a random positive integer.
 * @param integer upper bound for the returned integer.
 * @returns any integer in the 0 to integer-1 range.
 */
function int(integer: number): number {
  if (integer < 0) throw 'Parameter integer can only be a positive integer.';
  return Math.floor(Math.random() * integer);
}

//Returns random boolean value based on the probability input. 0.1 means 10% chance of true
function boolean(probability: number): boolean {
  let randoBool = Math.random() <= probability;
  return randoBool;
}

//Returns any integer in the min to max-1 range. The max integer is excluded, so a roll for 2-8 would look like this: range(9, 2)
function range(max: number, min: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

//Multiple dice rolls, returns an array of unique ascending different integer that is as long as the 'rolls' input.
function multiRollUniqueSortedAscending(max: number, min: number, rolls: number): number[] {
  let arr = [];
  while (arr.length < rolls) {
    let r = Math.floor(Math.random() * (max - min) + min);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr.sort(function (a, b) {
    return a - b;
  });
}

//Multiple dice rolls, returns an array of ascending different integers that is as long as the 'rolls' input.
function multiRollSortedAscending(max: number, min: number, rolls: number): number[] {
  let arr = [];
  for (let i = 0; i < rolls; i++) {
    arr.push(Math.floor(Math.random() * (max - min) + min));
  }
  return arr.sort(function (a, b) {
    return a - b;
  });
}

//Multiple dice rolls, returns an array of unique descending different integers that is as long as the 'rolls' input.
function multiRollUniqueSortedDescending(max: number, min: number, rolls: number): number[] {
  let arr = [];
  while (arr.length < rolls) {
    let r = Math.floor(Math.random() * (max - min) + min);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr.sort(function (a, b) {
    return b - a;
  });
}

//Multiple dice rolls, returns an array of descending different integers that is as long as the 'rolls' input.
function multiRollSortedDescending(max: number, min: number, rolls: number): number[] {
  let arr = [];
  for (let i = 0; i < rolls; i++) {
    arr.push(Math.floor(Math.random() * (max - min) + min));
  }
  return arr.sort(function (a, b) {
    return b - a;
  });
}

//Multiple dice rolls, returns an array of unique unsorted integers that is as long as the 'rolls' input.
function multiRollUniqueUnsorted(max: number, min: number, rolls: number): number[] {
  let arr = [];
  while (arr.length < rolls) {
    let r = Math.floor(Math.random() * (max - min) + min);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}

//Multiple dice rolls, returns an array of unsorted integers that is as long as the 'rolls' input.
function multiRollUnsorted(max: number, min: number, rolls: number): number[] {
  let arr = [];
  for (let i = 0; i < rolls; i++) {
    arr.push(Math.floor(Math.random() * (max - min) + min));
  }
  return arr;
}

module.exports = {
  int,
  boolean,
  range,
  multiRollUniqueSortedAscending,
  multiRollSortedAscending,
  multiRollUniqueSortedDescending,
  multiRollSortedDescending,
  multiRollUniqueUnsorted,
  multiRollUnsorted,
};
