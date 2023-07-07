"use strict";

// Step 1
// Simplify the following big O expressions as much as possible:


// O(n + 10) --> O(n)
// O(100 × n) --> O(n)
// O(25) --> O(1)
// O(n^2 + n^3) --> O(n^3)
// O(n + n + n + n) --> O(n)
// O(1000 × log(n) + n) --> O(logn)
// O(1000 × n × log(n) + n) --> O(nlog(n))
// O(2^n + n^2) --> O(2^n)
// O(5 + 3 + 1) --> O(n)


// Step 2
function logUpTo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
// Time Complexity: O(n)

function logAtLeast10(n) {
  for (let i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}
// Time Complexity: O(n)

function logAtMost10(n) {
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
// Time Complexity: O(1)

function onlyNumsAtEvenIndexes(nums) {
  let numsAtEvens = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      numsAtEvens.push(nums[i]);
    }
  }

  return numsAtEvens;
}
// Time Complexity: O(n)

function runningSubtotals(nums) {
  let subtotals = [];

  for (let i = 0; i < nums.length; i++) {
    let subtotal = 0;
    for (let j = 0; j <= i; j++) {
      subtotal += nums[j];
    }
    subtotals.push(subtotal);
  }

  return subtotals;
}
// Time Complexity: O(n)
// Outer loop scales with nums, inner loop does not.

const VOWELS = "aeiouAEIOU";

function vowelsCounts(word) {
  let vowelsToCounts = {};

  for (let char of word) {
    if (VOWELS.includes(char)) {
      if (char in vowelsToCounts) {
        vowelsToCounts[char] += 1;
      } else {
        vowelsToCounts[char] = 1;
      }
    }
  }

  return vowelsToCounts;
}

// Time Complexity: O(n) based off word being unknown size.
  // includes method is constant O(1)
  // char in vowelsToCounts is a key look up which is constant O(1)



// Step Three: Short answer»
// Answer the following questions

// True or false: n2 + n is O(n2).
  // False. Arithmetic operation -- Constant
// True or false: n2 * n is O(n^3).
  // False. Arithemetic operation --- Constant
// True or false: n2 + n is O(n).
  // True
// What’s the time complexity of the .indexOf array method?
  // O(n)
// What’s the time complexity of the .includes array method?
  // O(n)
// What’s the time complexity of the .every array method?
  // O(n)
// What’s the time complexity of the .sort array method?
  // O(nlogn)
// What’s the time complexity of the .unshift array method?
  // O(n)
// What’s the time complexity of the .push array method?
  // O(1)
// What’s the time complexity of the .pop array method?
  // O(1)
// What’s the time complexity of the Object.keys() function?
  // o(n)
