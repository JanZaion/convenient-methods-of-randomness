//Returns any integer in the 0 to integer-1 range
function int(integer) {
  return Math.floor(Math.random() * integer);
}

//Returns random boolean value based on the probability input. 0.1 means 10% chance of true
function boolean(probability) {
  let randoBool = Math.random() <= probability;
  return randoBool;
}

//Returns any integer in the min to max-1 range. The max integer is excluded, so a roll for 2-8 would look like this: diceRange(9, 2)
function range(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

//Multiple dice rolls, returns an array of unique ascending different integer that is as long as the 'rolls' input. Max is excluded just like with diceRange.
function multiRollUniqueSortedAscending(max, min, rolls) {
  let arr = [];
  while (arr.length < rolls) {
    let r = Math.floor(Math.random() * (max - min) + min);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr.sort(function (a, b) {
    return a - b;
  });
}

//Multiple dice rolls, returns an array of ascending different integers that is as long as the 'rolls' input. Max is excluded just like with diceRange.
function multiRollSortedAscending(max, min, rolls) {
  let arr = [];
  for (let i = 0; i < rolls; i++) {
    arr.push(Math.floor(Math.random() * (max - min) + min));
  }
  return arr.sort(function (a, b) {
    return a - b;
  });
}

//Multiple dice rolls, returns an array of unique descending different integers that is as long as the 'rolls' input. Max is excluded just like with diceRange.
function multiRollUniqueSortedDescending(max, min, rolls) {
  let arr = [];
  while (arr.length < rolls) {
    let r = Math.floor(Math.random() * (max - min) + min);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr.sort(function (a, b) {
    return b - a;
  });
}

//Multiple dice rolls, returns an array of descending different integers that is as long as the 'rolls' input. Max is excluded just like with diceRange.
function multiRollSortedDescending(max, min, rolls) {
  let arr = [];
  for (let i = 0; i < rolls; i++) {
    arr.push(Math.floor(Math.random() * (max - min) + min));
  }
  return arr.sort(function (a, b) {
    return b - a;
  });
}

//Multiple dice rolls, returns an array of unique unsorted integers that is as long as the 'rolls' input. Max is excluded just like with diceRange.
function multiRollUniqueUnsorted(max, min, rolls) {
  let arr = [];
  while (arr.length < rolls) {
    let r = Math.floor(Math.random() * (max - min) + min);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}

//Multiple dice rolls, returns an array of unsorted integers that is as long as the 'rolls' input. Max is excluded just like with diceRange.
function multiRollUnsorted(max, min, rolls) {
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