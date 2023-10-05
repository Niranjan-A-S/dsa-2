// Static array in JS
// const arrayLength = 9;
// const array = new Array(arrayLength).fill('1')
// Object.freeze(array);

//In js arrays are dynamic so insertion of new items into the array has a time complexity of O(n)

//?How to build an array?

class CustomArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    get(index) {
        return this.data[index]
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
    }
    pop() {
        delete this.data[this.length - 1];
        this.length--;
    }

}

const array = new CustomArray()
array.push(1)
array.pop()

const reverse = (str) => str.split("").reverse().join("")

const array1 = [1, 4, 5, 9]
const array2 = [4, 5, 7, 40]

const mergeSortedArrays = () => {
    console.log([...array1, ...array2].sort((a, b) => a - b));
}
const mergeSortedArray2 = () => {

}
