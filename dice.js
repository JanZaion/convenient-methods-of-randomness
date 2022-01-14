/**
 * Returns a random positive integer.
 * @param integer upper bound for the returned integer.
 * @returns any integer in the 0 to integer-1 range.
 */
function int(integer) {
    if (integer < 0)
        throw 'Parameter integer can only be a positive integer.';
    return Math.floor(Math.random() * integer);
}
/**
 * Returns random boolean.
 * @param propability decimal number representing probability.
 * @returns Boolean based on the probability input. 0.1 means 10% chance of returning true.
 */
function boolean(probability) {
    var randoBool = Math.random() <= probability;
    return randoBool;
}
/**
 * Returns any integer in the min to max-1 range.
 * @param max upper bound for the returned integer.
 * @param min lower bound for the returned integer.
 * @returns an integer. The max integer is excluded, so a roll for 2-8 would look like this: range(9, 2)
 */
function range(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}
/**
 * Multiple dice rolls for unique integers sorted in an ascending order.
 * @param max upper bound for the returned integer.
 * @param min lower bound for the returned integer.
 * @param rolls the number of dice rolls.
 * @returns an array of unique ascending integers that is as long as the 'rolls' input.
 */
function multiRollUniqueSortedAscending(max, min, rolls) {
    var arr = [];
    while (arr.length < rolls) {
        var r = Math.floor(Math.random() * (max - min) + min);
        if (arr.indexOf(r) === -1)
            arr.push(r);
    }
    return arr.sort(function (a, b) {
        return a - b;
    });
}
/**
 * Multiple dice rolls for integers sorted in an ascending order.
 * @param max upper bound for the returned integer.
 * @param min lower bound for the returned integer.
 * @param rolls the number of dice rolls.
 * @returns an array of ascending different integers that is as long as the 'rolls' input. Returned integers can repeat.
 */
function multiRollSortedAscending(max, min, rolls) {
    var arr = [];
    for (var i = 0; i < rolls; i++) {
        arr.push(Math.floor(Math.random() * (max - min) + min));
    }
    return arr.sort(function (a, b) {
        return a - b;
    });
}
/**
 * Multiple dice rolls for unique integers sorted in a descending order.
 * @param max upper bound for the returned integer.
 * @param min lower bound for the returned integer.
 * @param rolls the number of dice rolls.
 * @returns an array of unique descending integers that is as long as the 'rolls' input.
 */
function multiRollUniqueSortedDescending(max, min, rolls) {
    var arr = [];
    while (arr.length < rolls) {
        var r = Math.floor(Math.random() * (max - min) + min);
        if (arr.indexOf(r) === -1)
            arr.push(r);
    }
    return arr.sort(function (a, b) {
        return b - a;
    });
}
/**
 * Multiple dice rolls for integers sorted in a descending order.
 * @param max upper bound for the returned integer.
 * @param min lower bound for the returned integer.
 * @param rolls the number of dice rolls.
 * @returns an array of descending integers that is as long as the 'rolls' input. Returned integers can repeat.
 */
function multiRollSortedDescending(max, min, rolls) {
    var arr = [];
    for (var i = 0; i < rolls; i++) {
        arr.push(Math.floor(Math.random() * (max - min) + min));
    }
    return arr.sort(function (a, b) {
        return b - a;
    });
}
/**
 * Multiple dice rolls for unique unsorted integers.
 * @param max upper bound for the returned integer.
 * @param min lower bound for the returned integer.
 * @param rolls the number of dice rolls.
 * @returns an array of unique unsorted integers that is as long as the 'rolls' input.
 */
function multiRollUniqueUnsorted(max, min, rolls) {
    var arr = [];
    while (arr.length < rolls) {
        var r = Math.floor(Math.random() * (max - min) + min);
        if (arr.indexOf(r) === -1)
            arr.push(r);
    }
    return arr;
}
/**
 * Multiple dice rolls for unsorted integers.
 * @param max upper bound for the returned integer.
 * @param min lower bound for the returned integer.
 * @param rolls the number of dice rolls.
 * @returns an array of unsorted integers that is as long as the 'rolls' input. Returned integers can repeat.
 */
function multiRollUnsorted(max, min, rolls) {
    var arr = [];
    for (var i = 0; i < rolls; i++) {
        arr.push(Math.floor(Math.random() * (max - min) + min));
    }
    return arr;
}
module.exports = {
    int: int,
    boolean: boolean,
    range: range,
    multiRollUniqueSortedAscending: multiRollUniqueSortedAscending,
    multiRollSortedAscending: multiRollSortedAscending,
    multiRollUniqueSortedDescending: multiRollUniqueSortedDescending,
    multiRollSortedDescending: multiRollSortedDescending,
    multiRollUniqueUnsorted: multiRollUniqueUnsorted,
    multiRollUnsorted: multiRollUnsorted,
};
