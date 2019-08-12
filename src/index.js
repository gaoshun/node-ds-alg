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

// algorithms
const bubbleSort = require('./algorithms/sorting/bubble-sort');
const selectionSort = require('./algorithms/sorting/selection-sort');
const insertionSort = require('./algorithms/sorting/insertion-sort');
const mergeSort = require('./algorithms/sorting/merge-sort');
const quickSort = require('./algorithms/sorting/quick-sort');
const bucketSort = require('./algorithms/sorting/bucket-sort');
const heapSort = require('./algorithms/sorting/heap-sort');
const countingSort = require('./algorithms/sorting/counting-sort');
const radixSort = require('./algorithms/sorting/radix-sort');

const { binarySearch, binarySearchRecursive } = require('./algorithms/search/binary-search');
const { interpolationSearch } = require('./algorithms/search/interpolation-search');
const { sequentialSearch } = require('./algorithms/search/sequential-search');

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
    alg: {
        // sort
        bubbleSort: bubbleSort,
        selectionSort: selectionSort,
        insertionSort: insertionSort,
        mergeSort: mergeSort,
        quickSort: quickSort,
        bucketSort: bucketSort,
        heapSort: heapSort,
        countingSort: countingSort,
        radixSort: radixSort,
        // search
        binarySearch: binarySearch,
        binarySearchRecursive: binarySearchRecursive,
        interpolationSearch: interpolationSearch,
        sequentialSearch: sequentialSearch,
    }
}