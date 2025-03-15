// Write a function to reverse a string.

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));

// Write a function to check if a string is a palindrome.

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));


// Write a function to find the factorial of a number.

function factorial(n) {
    if (n === 0) return 1; 
    return n * factorial(n - 1); 
}
console.log(factorial(5));


//  Write a function to generate the Fibonacci series up to n terms.

function fibonacci(n) {
    let result = [0, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result.slice(0, n);
}

// Write a function to find the second largest number in an array.

function secondLargest(arr) {
    arr.sort((a, b) => b - a);
    return arr[1]; 
}
console.log(secondLargest([10, 20, 4, 45, 99])); 

// Write a function to find the missing number in an array.

function findMissingNumber(arr) {
    let n = arr.length + 1;
    let total = (n * (n + 1)) / 2;  
    let aSum = arr.reduce((sum, num) => sum + num, 0); 
    return total - aSum;  
}

console.log(findMissingNumber([1, 2, 4, 5])); 

// Write a function to count the occurrences of each character in a string.
function countOccurrences(str) {
    let result = {};
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (result[char]) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    
    return result;
}
console.log(countOccurrences("hello")); 


// 1.Find the output of the following code:

// 122
// 32
// 02
// 112
// NaN2
// NaN

// 2 question
// True

//3 question
// 456

//4 question
// undefined

// 8 question
// number

// 9 question 
//  undefined
// 5