//Queues
//In the queue the pop method removes from the first
import { Stack } from './stack.js';
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;

        }
        this.length--;
        return this;
    }
}

const queue = new Queue();
queue.enqueue("Joy")
queue.enqueue("Chandler")
queue.enqueue("Ross").dequeue().dequeue().dequeue();
// console.log(queue);

//!Queues using stacks
class _Queue {
    constructor() {
        this.stack = new Stack();
    }

    peek() {
        return this.stack.top;
    }

    enqueue(value) {
        const newNode = new Node(value);

    }
}

const _queue = new _Queue();
console.log(_queue);
