//Stacks

//stack Follows rhe LIFO rule whereas the queues follows the FIFO rule

//!Stack using Linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 1) {
            this.bottom = null;
        }
        if (this.length) {
            this.top = this.top.next;
            this.length--;
        }
        return this;
    }

    //This is just
    // print() {
    //     const array = [];
    //     let currentNode = this.top;
    //     while (currentNode) {
    //         array.push(currentNode.value);
    //         currentNode = currentNode.next;
    //     }
    //     console.log(array);
    //     return this;
    // }

    isEmpty() {
        return !Boolean(this.length)
    }
}

const stack = new Stack();
stack.push('google').push('stack overflow').pop().push('jira').push('gitlab');
// stack.push().push().pop().pop();
// console.log(stack)
// console.log(stack.isEmpty())

//! Stack using Array

class StackArray {
    constructor() {
        this.array = [];
        this.length = this.array.length;
    }

    peek() {
        return this.array[this.length];
    }

    push(value) {
        this.array.push(value);
        this.length++;
    }

    pop() {
        this.array.pop();
        this.length--;
    }
}

const stackArray = new StackArray();
stackArray.push('google');
stackArray.push('facebook');
stackArray.pop();
// console.log(stackArray);