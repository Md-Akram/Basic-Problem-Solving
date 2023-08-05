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


function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}

console.log(countVowels("Hello World")); // Should output 3 (e, o, o)
