const _util = require('./util');

const util = _util;

// data structures
const Stack = require('./data-structures/stack/stack');
const StackArray = require('./data-structures/stack/stack-array');
const StackLinkedList = require('./data-structures/stack/stack-linked-list');

const Queue = require('./data-structures/queue/queue');
const Deque = require('./data-structures/queue/deque');

const LinkedList = require('./data-structures/linkedlist/linked-list');
const DoublyLinkedList = require('./data-structures/linkedlist/doubly-linked-list');
const CircularLinkedList = require('./data-structures/linkedlist/circular-linked-list');
const SortedLinkedList = require('./data-structures/linkedlist/sorted-linked-list');

const Set = require('./data-structures/set/set');

const Dictionary = require('./data-structures/dictionary/dictionary');
const HashTable = require('./data-structures/dictionary/hash-table');
const HashTableSeparateChaining = require('./data-structures/dictionary/hash-table-separate-chaining');
const HashTableLinearProbing = require('./data-structures/dictionary/hash-table-linear-probing');
const HashTableLinearProbingLazy = require('./data-structures/dictionary/hash-table-linear-probing-lazy');

const BinarySearchTree = require('./data-structures/tree/binary-search-tree');
const AVLTree = require('./data-structures/tree/avl-tree');

const { MinHeap, MaxHeap } = require('./data-structures/heap/heap');

const BinarySearchTree = require('./data-structures/tree/binary-search-tree');

// algorithms


module.exports = {
    ds: {
        // stack
        StackArray: StackArray,
        Stack: Stack,
        StackLinkedList: StackLinkedList,
        // Queue
        Queue: Queue,
        Deque: Deque,
        // linkedList
        LinkedList: LinkedList,
        DoublyLinkedList: DoublyLinkedList,
        CircularLinkedList: CircularLinkedList,
        SortedLinkedList: SortedLinkedList,
        // Set
        Set: Set,
        // Dictionary
        Dictionary: Dictionary,
        HashTable: HashTable,
        HashTableSeparateChaining: HashTableSeparateChaining,
        HashTableLinearProbing: HashTableLinearProbing,
        HashTableLinearProbingLazy: HashTableLinearProbingLazy,
        // Tree
        AVLTree: AVLTree,
        BinarySearchTree: BinarySearchTree,
        // Heap
        MinHeap: MinHeap,
        MaxHeap: MaxHeap
    },
    alg: {}
}

// export { default as heapSort } from './algorithms/sorting/heap-sort';

// export { default as Graph } from './data-structures/graph/graph';
// export { breadthFirstSearch } from './algorithms/graph/breadth-first-search';
// export { BFS } from './algorithms/graph/breadth-first-search';
// export { depthFirstSearch } from './algorithms/graph/depth-first-search';
// export { DFS } from './algorithms/graph/depth-first-search';
// export { dijkstra } from './algorithms/graph/dijkstra';
// export { floydWarshall } from './algorithms/graph/floyd-warshall';
// export { prim } from './algorithms/graph/prim';
// export { kruskal } from './algorithms/graph/kruskal';

// export { shuffle } from './algorithms/shuffle/fisher–yates';

// export { bubbleSort } from './algorithms/sorting/bubble-sort';
// export { modifiedBubbleSort } from './algorithms/sorting/bubble-sort-improved';
// export { bucketSort } from './algorithms/sorting/bucket-sort';
// export { countingSort } from './algorithms/sorting/counting-sort';
// export { insertionSort } from './algorithms/sorting/insertion-sort';
// export { mergeSort } from './algorithms/sorting/merge-sort';
// export { quickSort } from './algorithms/sorting/quicksort';
// export { radixSort } from './algorithms/sorting/radix-sort';
// export { selectionSort } from './algorithms/sorting/selection-sort';
// export { shellSort } from './algorithms/sorting/shell-sort';

// export { binarySearch } from './algorithms/search/binary-search';
// export { interpolationSearch } from './algorithms/search/interpolation-search';
// export { sequentialSearch } from './algorithms/search/sequential-search';
// export { findMaxValue } from './algorithms/search/min-max-search';
// export { findMinValue } from './algorithms/search/min-max-search';

// export { binarySearch as binarySearchRecursive } from './algorithms/search/binary-search-recursive';
// export { minCoinChange } from './algorithms/dynamic-programing/min-coin-change';
// export { minCoinChange as minCoinChangeGreedy } from './algorithms/greedy/min-coin-change';
// export { knapSack } from './algorithms/dynamic-programing/knapsack';
// export { knapSack as knapSackRecursive } from './algorithms/dynamic-programing/knapsack-recursive';
// export { knapSack as knapSackGreedy } from './algorithms/greedy/knapsack';
// export { lcs } from './algorithms/dynamic-programing/longest-common-subsequence';
// export { lcs as lcsPrint } from './algorithms/dynamic-programing/longest-common-subsequence-print';
// export { lcs as lcsRecursive } from './algorithms/greedy/longest-common-subsequence';
// export { matrixChainOrder } from './algorithms/dynamic-programing/matrix-chain-multiplication';
// export { matrixChainOrder as matrixChainOrderGreedy } from './algorithms/greedy/matrix-chain-multiplication';
// export { ratInAMaze } from './algorithms/backtracking/rat-in-maze';
// export { sudokuSolver } from './algorithms/backtracking/sudoku-solver';
