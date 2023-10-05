//Linked Lists

//! One important point to notice is that when any data is not referenced by anything it automatically gets garbage collected
let obj1 = { a: true }
let obj2 = obj1;
obj1 = "test";
// console.log(obj1);

let str1 = "Hello";
let str2 = str1;
// console.log(str1)

// ?Example of linked list
// Suppose we have a a collection of 2 numbers so the linked list will look something like this
[5, 6, 9]
const customLinkedList = {
    head: {
        value: 5,
        next: {
            value: 6,
            next: {
                value: 9,
                next: null
            }
        }
    }
}

// class LinkedListItem {
//     constructor(value) {
//         this.item = {
//             value,
//             next: null
//         }
//     }
//     getItem() {
//         return this.item;
//     }
// }


// class LinkedList {
//     constructor(value) {
//         this.list = new LinkedListItem(value);
//         this.latestItem = this.list.getItem();
//         this.length = 1
//     }

//     append(value) {
//         const newNode = new LinkedListItem(value);
//         this.latestItem.next = newNode;
//         this.length++
//         return this;
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    //O(1)

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++
        return this;
    }
    //O(1)

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array)
    }
    //O(n)

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = this.traverseToIndex(index);
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this;
    }
    //O(n)

    clearList() {
        this.head = null;
        this.tails = null;
        this.length = 0;
        return this;
    }
    //O(1)

    shift() {
        if (this.length === 1) {
            return this.clearList();
        }
        this.head = this.head.next;
        this.length--;
        return this;
    }
    //O(1)

    pop() {
        if (this.length === 0) {
            console.log("The list is empty. Nothing to pop.");
            return this;
        }
        if (this.length === 1) {
            return this.clearList();
        }
        const secondLastItem = this.traverseToIndex(this.length - 2);
        secondLastItem.next = null;
        this.tail = secondLastItem;
        this.length--;
        return this;
    }

    remove(index) {
        if (index >= this.length) {
            console.log(`Invalid index ${index}`);
            return this;
        }
        if (index === 0) {
            return this.shift();
        }
        const leader = this.traverseToIndex(index - 1);
        const nodeToBeRemoved = leader.next;
        leader.next = nodeToBeRemoved.next;
        this.length--;
        return this;
    }

    traverseToIndex(index) {
        //check the validity of the index
        let currentNode = this.head, counter = 0;
        while (index !== counter) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    //! This is important reversing a linked list
    reverse() {
        let currentNode = this.head;
        let previousNode = null;
        while (currentNode !== null) {
            let next = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = next;
        }
        this.head = previousNode;
        return this
    }
}

const linkedList = new LinkedList(2);
// linkedList.append(3).prepend(1).insert(4, 4).insert(100, 100).pop().append(5).prepend(0).append(8).insert(6, 6).insert(7, 7).remove(0).reverse();
linkedList.append(3).prepend(1).reverse()
linkedList.printList();

class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList extends LinkedList {
    constructor(value) {
        super(value)
        this.head = new _Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new _Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new _Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const follower = this.traverseToIndex(index);
        leader.next = newNode;
        follower.prev = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        this.length++;
        return this;
    }
}


const doublyLinkedList = new DoublyLinkedList(1);
// doublyLinkedList.append(2).insert(1, 0).printList()
