//!Every recursive function must have a base case

// let counter = 0;
// function inception() {
//     console.log(counter);
//     if (counter > 3) {
//         return 'done'; // base case;
//     }
//     counter++;
//     inception();
// }
// const temp = inception();
// console.log(temp);
//! Here we wil get undefined since inception is a recursive function and nothing is returned from it
//!  But when the recursive function is returned from the function then it will return the value

// let _counter = 0;
// function _inception() {
//     console.log(_counter);
//     if (_counter > 3) {
//         return 'done';
//     }
//     _counter++;
//     return _inception();
// }

// const _temp = _inception();
// console.log(_temp);
//This is the perfect use case of recursion

/**
 * Identify the base case
 * Identify the recursive case
 * Get closer and closer and return when needed. Usually you have 2 returns
 */

//Write two functions that finds the factorial of any number. One should use recursion and the other should use iteration.

const findFactorialRecursive = (num) => {
    if (num === 2) {
        return 2;
    }
    return num * findFactorialRecursive(num - 1)
}

const findFactorialIterative = (num) => {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

//Given a number N return the value of index N in the Fibonacci sequence.
//ie in this case 0,1,1,2,3,5,8,13,21 if N = 2, return 1

const fibonacciIterative = (num) => {
    const temp = [0, 1];
    let result = temp[0];
    if (num === 1) {
        result === temp[1];
    }
    for (let i = 2; i <= num; i++) {
        result = temp[i - 1] + temp[i - 2];
        temp.push(result);
    }
    return result;
}
// console.log(fibonacciIterative(8))
const fibonacciRecursive = (num) => {
    if (num === 0) {
        return 0
    } else if (num === 1) {
        return 1
    }
    return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2) //O(2 ^ n)
}
// console.log(fibonacciRecursive(8))

const tutorialFibonacciRecursive = (num) => {
    if (num < 2) {
        return num;
    }
    return tutorialFibonacciRecursive(num - 1) + tutorialFibonacciRecursive(num - 2); //O(2 ^ n)
}
// console.log(tutorialFibonacciRecursive(8))

const tutorialFibonacciIterative = (num) => {
    let temp = [0, 1];
    for (let i = 2; i <= num; i++) {
        temp.push(temp[i - 1] + temp[i - 2]);
    }
    return temp[num];
}
// console.log(tutorialFibonacciIterative(8))

//! Anything that can be done with a recursion that can be done with a loop
 
// Recursion New Rule: 
// Every time you are using a tree or converting something into a tree consider using recursion.
/**
 * Divided into a number of sub problems that are smaller instances of the same problem
 * Each instance of the subproblem is identical in nature
 * The solutions of each subproblem can be combined to solve the problem at hand
 */
//!Divide and Conquer using Recursion

// When should we use Recursion
/**
 * Sorting
 * Searching (BFS and DFS)
 */ 