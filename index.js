// Problem 1

// function findMax(a, b, c) {
//     return Math.max(a, b, c);
// }

// console.log(findMax(10, 5, 8));

// Problem 2

// function celsiusToFahrenheit(celsius) {
//     const fahrenheit = celsius * 9 / 5 + 32;
//     return fahrenheit;
// }

// console.log(celsiusToFahrenheit(25));

// Problem 3

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// console.log(reverseString("hello")); 

// Problem 4

// function isPalindrome(str) {
//     const reverse = str.split("").reverse().join("");
//     return str === reverse;
// }

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));   

// Problem 5

// function factorial(n) {
//     let fact = 1
//     for (let i = n; i > 0; i--) {
//         fact = fact * i
//     }
//     return fact
// }

// console.log(factorial(5));

// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(5)); // Should output 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)

// Problem 6

// function longestWordLength(sentence) {
//     const words = sentence.split(' ')
//     let longestWord = 0
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord) {
//             longestWord = words[i].length
//         }
//     }
//     return longestWord

// }

// function longestWordLength(sentence) {
//     const words = sentence.split(' ')
//     let longestWord = 0
//     for (let word of words) {
//         if (word.length > longestWord) {
//             longestWord = word.length
//         }
//     }
//     return longestWord
// }

// console.log(longestWordLength("The quick brown fox jumps over the lazy dog"));

// Problem 7


// function countVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     let count = 0
//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             count++
//         }
//     }
//     return count
// }

// console.log(countVowels("Hello World")); // Should output 3 (e, o, o)

// Problem 8

// function sumOfMultiples(num1, num2, limit) {
//     let sum = 0
//     for (let i = 1; i < limit; i++) {
//         if (i % num1 === 0 || i % num2 === 0) {
//             sum += i
//         }
//     }
//     return sum
// }

// console.log(sumOfMultiples(3, 5, 10)); // Should output 23 (3 + 5 + 6 + 9)

// Problem 9

// function titleCase(sentence) {
//     // Your code here
//     let newWords = []
//     const words = sentence.split(' ')
//     for (let word of words) {
//         word = word.toUpperCase()
//         word = word[0] + word.slice(1).toLowerCase()
//         newWords.push(word)

//     }
//     return newWords.join(' ')
// }

// console.log(titleCase("hello world")); // Should output "Hello World"


// Problem 10

// function removeDuplicates(arr) {
//     let newArr = []
//     for (let num of arr) {
//         if (newArr.indexOf(num) === -1) {
//             newArr.push(num)
//         }
//     }
//     return newArr
// }

// console.log(removeDuplicates([1, 2, 3, 2, 4, 3, 5])); // Should output [1, 2, 3, 4, 5]


// Problem 11

// function fizzBuzz() {
//     let arr = []
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             arr.push("FizzBuzz")
//         } else if (i % 3 === 0) {
//             arr.push("Fizz")
//         } else if (i % 5 === 0) {
//             arr.push("Buzz")
//         } else {
//             arr.push(i)
//         }
//     }
//     return arr
// }

// console.log(fizzBuzz());; // Should output the FizzBuzz sequence

// Problem 12

// function arraySum(arr) {
//     let sum = 0;
//     for (let num of arr) {
//         sum = sum + num
//     }
//     return sum
// }

// console.log(arraySum([1, 2, 3, 4, 5])); // Should output 15
// console.log(arraySum([-1, 0, 1]));     // Should output 0


// Problem 13

// function isInteger(num) {
//     if (typeof num !== 'number') {
//         return "please enter a number"
//     } else {
//         if (num % 1 === 0) {
//             return true
//         } else {
//             return false
//         }
//     }

// }

// console.log(isInteger(5)); // Should output true

// Problem 14

// function isJavascript(str) {
//     if (str.endsWith('.js')) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isJavascript('hello.js')); // Should output true

// Problem 15

// function mindGame(x) {
//     if (typeof x !== 'number') {
//         return 'Please enter a number'
//     }
//     if (x <= 0) {
//         return 'Please enter a positive number'
//     }

//     return (((x * 3) + 10) / 2) - 5
// }

// console.log(mindGame(0)); 

// Problem 16

// function isLGSeven(x) {
//     if (typeof x !== "number") {
//         return 'please provide a number'
//     } else {
//         let sub = x - 7
//         if (sub < 7) {
//             return sub
//         } else {
//             return x * 2
//         }
//     }
// }

// console.log(isLGSeven(14)); // Should output 6

// Problem 17

// function findingBadData(arr) {
//     if (!Array.isArray(arr)) {
//         return 'please provide an array of numbers'
//     } else {
//         let badDataCount = 0
//         for (let num of arr) {
//             if (typeof num !== 'number') {
//                 return 'please provide an array of numbers'
//             } else if (num < 0) {
//                 badDataCount++
//             }
//         }
//         return badDataCount
//     }
// }

// console.log(findingBadData([1, 2, 3])); // Should output 3

// Problem 18

// function gemsToDiamond(x, y, z) {
//     if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
//         return 'please provide numbers'
//     } else if (x < 0 || y < 0 || z < 0) {
//         return 'please provide positive numbers'
//     } else {
//         let powerOfX = 21;
//         let powerOfY = 32;
//         let powerOfZ = 43;
//         let totalPower = (x * powerOfX) + (y * powerOfY) + (z * powerOfZ)
//         if (totalPower > (1000 * 2)) {
//             totalPower = totalPower - (1000 * 2)
//         }
//         return totalPower
//     }
// }

// console.log(gemsToDiamond(1, 1, 1));
// console.log(gemsToDiamond(10, 30.6, 20));
// console.log(gemsToDiamond(100, 5, 1)); 

// Problem 19

function printDetails(obj) {
    if (typeof obj !== 'object') {
        return 'please provide an object'
    } else {
        let arr = []
        for (let key in obj) {
            arr.push('amar ' + key + ' ' + (obj[key] ? obj[key] : 'nai'))
        }
        return arr.join(', ')
    }
}

console.log(printDetails({ name: 'John', age: 23, email: "" }));