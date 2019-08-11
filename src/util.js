const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
};

const DOES_NOT_EXIST = -1;

function lesserEquals(a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}

function biggerEquals(a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
}

function defaultCompare(a, b) {
    if (a === b) {
        return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function defaultEquals(a, b) {
    return a === b;
}

function defaultToString(item) {
    if (item === null) {
        return 'NULL';
    } else if (item === undefined) {
        return 'UNDEFINED';
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`;
    }
    return item.toString();
}

function swap(array, a, b) {
    /* const temp = array[a];
    array[a] = array[b];
    array[b] = temp; */
    [array[a], array[b]] = [array[b], array[a]];
}
function reverseCompare(compareFn) {
    return (a, b) => compareFn(b, a);
}

function defaultDiff(a, b) {
    return Number(a) - Number(b);
}

function findMaxValue(array, compareFn = defaultCompare) {
    if (array && array.length > 0) {
        let max = array[0];
        for (let i = 1; i < array.length; i++) {
            if (compareFn(max, array[i]) === Compare.LESS_THAN) {
                max = array[i];
            }
        }
        return max;
    }
    return undefined;
}
function findMinValue(array, compareFn = defaultCompare) {
    if (array && array.length > 0) {
        let min = array[0];
        for (let i = 1; i < array.length; i++) {
            if (compareFn(min, array[i]) === Compare.BIGGER_THAN) {
                min = array[i];
            }
        }
        return min;
    }
    return undefined;
}

module.exports = {
    Compare: Compare,
    DOES_NOT_EXIST: DOES_NOT_EXIST,
    lesserEquals: lesserEquals,
    biggerEquals: biggerEquals,
    defaultCompare: defaultCompare,
    defaultEquals: defaultEquals,
    defaultToString: defaultToString,
    swap: swap,
    reverseCompare: reverseCompare,
    defaultDiff: defaultDiff,
    findMinValue: findMinValue,
    findMaxValue: findMaxValue,
}