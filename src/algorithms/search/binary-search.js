const { Compare, defaultCompare, DOES_NOT_EXIST } = require('../../util');
const quickSort = require('../sorting/quick-sort');

function binarySearch(array, value, compareFn = defaultCompare) {
    const sortedArray = quickSort(array);
    let low = 0;
    let high = sortedArray.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const element = sortedArray[mid];
        // console.log('mid element is ' + element);
        if (compareFn(element, value) === Compare.LESS_THAN) {
            low = mid + 1;
            // console.log('low is ' + low);
        } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
            high = mid - 1;
            // console.log('high is ' + high);
        } else {
            // console.log('found it');
            return mid;
        }
    }
    return DOES_NOT_EXIST;
}


function bsRecursive(array, value, low, high, compareFn = defaultCompare) {
    if (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const element = array[mid];
        if (compareFn(element, value) === Compare.LESS_THAN) {
            return bsRecursive(array, value, mid + 1, high, compareFn);
        }
        if (compareFn(element, value) === Compare.BIGGER_THAN) {
            return bsRecursive(array, value, low, mid - 1, compareFn);
        }
        return mid;
    }
    return DOES_NOT_EXIST;
}

function binarySearchRecursive(array, value, compareFn = defaultCompare) {
    const sortedArray = quickSort(array);
    const low = 0;
    const high = sortedArray.length - 1;
    return bsRecursive(array, value, low, high, compareFn);
}

module.exports = {
    binarySearch: binarySearch,
    binarySearchRecursive: binarySearchRecursive,
};
