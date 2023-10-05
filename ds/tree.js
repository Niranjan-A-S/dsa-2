//Binary tree
//!Rules
/* Each node can have only 0, 1, 2 children
 * Each child can have only 1 parent
 * For a prefect binary tree The number of nodes in the last level is equal to number of nodes except in the last level  plus 1
 * For a prefect binary tree The number of nodes in each level is the double of the number of nodes in the above level
 * the lookup, insert and delete complexities of a binary tree is O(log n)
 */

//!Log
/**
 * 100 = 10^2;
 * so log 100 = 2
 * similarly No of nodes of in each level of a binary tree = 2^h where h is height or level;
 * so the total number of nodes in a binary tree= 2^n -1 where n = number of levels
 * so mathematically log nodes = height (meaning the maximum number of decisions that we are going to take when we are looking for a node)
 * ie N = 2^n - 1 (where N is the number of nodes and n is the number of levels in the tree)
 * ie N = 2^n
 * so the max number of decisions we are going to take for finding a node can be log n
 */

//!Binary Search tree(BST)
/**
 * All the child nodes from the right of the root node should be greater than the previous node when going down
 * A node can have only one children since it is a binary tree
 * The iteration goes in a linear fashion
 * lookup, insert and delete are O(log n)
 *      
 */

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    lookup(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        while (currentNode) {
            debugger;
            if (currentNode.value > value) {
                currentNode = currentNode.left
            }
            else if (currentNode.value < value) {
                currentNode = currentNode.right
            }
            else if (currentNode.value === value) {
                return currentNode;
            }
        }
        return false;
    }
}
//!Here even though we are using while loop we are just following something called as divide and conquer ie take decisions to go left or right
const bst = new BinarySearchTree();
bst.insert(9).insert(4).insert(6).insert(20).insert(170).insert(15).insert(1);
console.log(bst.lookup(170))
// console.log(JSON.stringify(bst.root));


function traverse(node) {
    const tree = { value: node.value };
    tree.left = !node.left ? null : traverse(node.left);
    tree.right = !node.right ? null : traverse(node.right);
    return tree;
}

//Balanced Trees
/**
 * AVL trees 
 * Red Black Tree
 */