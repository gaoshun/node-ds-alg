/* 
 * Tree Node
 */
class Node {
    constructor(key) {
        this.key = key;
        this.left = undefined;
        this.right = undefined;
    }
    toString() {
        return `${this.key}`;
    }
}

module.exports = {
    Node: Node
}