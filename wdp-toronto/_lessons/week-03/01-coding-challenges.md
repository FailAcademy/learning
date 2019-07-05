---
layout: lesson
title: JS Coding Challenges
lesson_date: 2019-07-15
---

## Learning Objectives

- Your JavaScript skills will be challenged today. Brace yourselves.

---

## Exercise 1: Reverse the word

<p>
Your job is to write a function that takes in a string as an argument and returns 
the reverse form of that string.
<p>
Input: I Love RED Academy
</br>
Output: ymedacA DER evoL I
</p>
<p>
Input: Web Dev 4 Lyfe!
</br>
Output: !efyL 4 veD beW
</p>
STRETCH GOAL: Refactor your code so that the function takes in an array of words and returns a new array of those words reversed.
</p>

---

## Exercise 2: Palindrome Checker

<p>

Adapting the approach you took in the last challenge, write a function that checks to see if a given 
string is a palindrome (e.g. “racecar” will produce the same word spelled backwards or forwards, so it is a palindrome).
</p>
<p>
If the string is a palindrome, return true. It’s not a palindrome return false. If an empty string 
is passed in as an argument, or some other data type, return a message indicating that the user
needs to pass a string in.
</p>
<p>
Be sure to take capitalization and spaces into account! It’s still a palindrome even if some of the 
letters are capitalized or there are spaces between the letters.
</p>
<p>
Input: boogers
</br>
Output: false
</p>
<p>
Input: racecar
</br>
Output: true
</p>
<p>
Input: A man, A plan, A canal: Panama
</br>
Output: true
</p>
<p>
STRETCH GOAL: Refactor your code so that the function takes in an array of words and returns a new array that 
contains only the words that are palindromes
</p>

---

## Exercise 3: Add the even numbers

<p>
Given an array of integers, isolate all the numbers that are even, add them together, and output the answer
</p>
<p>
Input: [1,2,3,4,5,6,7,8,9,10]
</br>
Output: 30
</p>
<p>
Input: [20,5,8,12,3,77,100,53,44]
</br>
Output: 184
</p>
<p>
STRETCH GOAL: 1. Only add the numbers if they are also divisible by 4.
</p>

---

## Exercise 4: FizzBuzz

<p>
Write a function that takes in an integer. Within the function you will be evaluating every number from 1 up 
to the number the function takes in. You will output a new string based on the following parameters:</p>
<ol>
<li>
For every number that comes up that is divisible by 3, replace it with Fizz
</li>
<li>
For every number that comes up that is divisible by 5, replace it with Buzz
</li>
<li>
For every number that comes up that is divisible by both 3 and 5, replace it with FizzBuzz
</li>
</ol>

<p>
Input: 10
</br>
Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz
</p>
<p>
Input: 30
</br>
Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, 
Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz</p>
<p>
STRETCH GOAL: Also output a talley of how many each word occurs
</p>
<p>
Input: 10
</br>
Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz
        Fizz: 3
        Buzz: 2
        FizzBuzz: 0
</p>

---

## Exercise 5: Profit Calculator

<p>
Given a list of stock prices for a number of days, your goal is to return the maximum 
profit that could have been made by buying a stock at one price and then selling the 
stock later on (for the sale price on that day)
</p>
<p>
If no profit could have been made, your program should return “All is lost!”.
</p>
<p>
Input: [45, 24, 35, 31, 40, 38, 11]
</br>
Output: 16
</p>
<p>
Why? For this particular list, if you had bought stock at 24 and sold it at 40, a profit of 16 was made. 
</p>
<p>
Input: [45, 50, 60, 20, 46, 100]
</br>
Output: 80
</p>
<p>
Input: [45, 100, 50, 60, 20]
</br>
Output: 55
</p>
<p>
STRETCH GOAL: Assuming that the the last index in the array represents today, output a string that says 
"If you had purchased the stock X days ago and held it for Y days, you would have made $Z"
</p>

---

## Exercise 6: Pig Latin Converter

<p>
Pig Latin is a game of alterations played on the English language. To create the Pig Latin form 
of an English word, the initial consonant sound is transposed to the end of the word and an “ay” 
is affixed (e.g. “banana” would yield anana-bay).
</p>
<p>
Write a function that converts a string into its Pig Latin equivalent. Check out Wikipedia for 
specific details on the rules of Pig Latin to figure out how you will implement your function.
</p>
<p>
Input: banana
</br>
Output: ananabay
</p>
<p>
Input: store
</br>
Output: orestay
</p>
<p>
Input: honest
</br>
Output: honestway
</p>
<p>
STRETCH GOAL: The function should take in a sentence in English as a String and completely convert it to a sentence in PigLatin
</p>

---

## Exercise 7: Interger?

<p>
In ES6 they introduced the function Number.isInteger() that returns true or false depending on whether the number passesd in is an integer or not. 
Imagine you are in a time pre-ES6 and you needed to determine whether a variable is an integer or not; 
Write a function that determines whether a number is an integer or not using ES5 ONLY!!!
</p>
<p>
Input: 5.0081
</br>
Output: false
</p>
<p>
Input: 5
</br>
Output: true
</p>

---

## Additional Resources

Need more?

- [Freecodecamp](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/)
