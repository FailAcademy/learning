---
layout: lesson
title: The Programming Interview
lesson_date: 2018-03-31
---

## Pre-Work

We've covered a broad range of topics this week! As a front-end developer, you will often find yourself doing much more than simply writing HTML, CSS, and JavaScript. You will find yourself acting as a bridge between UX designers and back-end developers, and acting as an advocate for accessibility and performance concerns on website.

Well-rounded front-end developers will be able to write great code while also juggling all of these (sometimes competing) concerns in relation to the code that they write.

To put these myriad job responsibilities (and others!) into perspective, please read this article prior to class:

* [A Front End Developer is Aware](https://css-tricks.com/front-end-developer-aware/)

Come prepared with your thoughts and reflections on this article (especially in relation to your journey so far over the first month of the course). We will discuss it as a class, and then jump into our programming interview questions.

---

## Learning Objectives

* Apply logic in conjunction with previously-acquired front-end development skills to solve a series of abstract programming challenges.
* Practice for a technical interview by completing a sample set of programming interview challenges.

---

## Lab Activity (All-Day)

In today's lesson, you'll be presented with typical programming interview questions which you might encounter if you were applying for a developer job.

The exercises today will be challenging, but for the most part will require using JavaScript techniques that you have already learned. You'll have the entire day to complete the questions.

Your mission is to try to apply what you've learned, and attempt to come up with solutions to as many of the exercises as you can.

**Tips For Success:**

1. Take your time
2. Break down the problems into small steps
3. Think about what variables/values you'll need
4. Ask others for help if you're stuck!

_Good luck and have fun!_

---

## Challenge 1

Given a number that represents the position of the minute hand on a clock (number of minutes from 0-60) write a function that returns the angle that is formed by the minute hand and 12.

If the user enters a number that is greater than 60 or less than 1, your program should fail, and log a friendly message to the console informing the user of their error.

---

## Challenge 2

Given a list of stock prices for a number of days, your goal is to return the maximum profit that could have been made by buying a stock at one price and then selling the stock later on, (for the sale price on that day).

What does this mean? For example, if given a list of stock prices per day: `[45, 24, 35, 31, 40, 38, 11]`, your program should return `16`.

Why? For this particular list, if you had bought stock at 24 and sold it at 40, a profit of 16 was made. For this list, 16 is the largest profit you could have made buy buying and selling on specific days. If no profit could have been made, your program should return “All is lost!”.

---

## Challenge 3

Write a function that logs the lyrics to the [The Twelve Day of Christmas](<https://en.wikipedia.org/wiki/The_Twelve_Days_of_Christmas_(song)>) line by line.

---

## Challenge 4

Create a function the reverses a string. Your function must be capable of reversing an entire sentence, and preserving the order of words (reverse in place).

For example: `Hello how are you` becomes `Olleh woh era uoy`.

**Extra Challenge:** Maintain capitalization of reversed words, like the example above.

Did you know? You can also reverse the direction of a string using HTML using the `<bdo>` element!

For example:

```html
<p><bdo dir="rtl">Sometimes things go wrong!</bdo></p>
```

Results in: `!gnorw og sgniht semitemoS`

---

## Challenge 5

Adapting the approach you took in the last challenge, write a function that checks to see if a given string is a palindrome (e.g. "racecar" will produce the same word spelled backwards or forwards, so it is a palindrome).

If the string is a palindrome, return `true`. It's not a palindrome return `false`. If an empty string is passed in as an argument, or some other data type, return a message indicating that the user needs to pass a string in.

Be sure to take capitalization and spaces into account! It's still a palindrome even if some of the letters are capitalized or there are space between the letters.

---

## Challenge 6

Pig Latin is a game of alterations played on the English language. To create the Pig Latin form of an English word, the initial consonant sound is transposed to the end of the word and an "ay" is affixed (e.g. "banana" would yield anana-bay).

Write a function that converts a string into its Pig Latin equivalent. [Check out Wikipedia](https://en.wikipedia.org/wiki/Pig_Latin) for specific details on the rules of Pig Latin to figure out how you will implement your function.

---

## Challenge 7

Write a `range` function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a`sum` function that takes an array of numbers and returns the sum of these numbers.

When used together, your functions would work like this:

```js
console.log(sum(range(1, 10))); // 55
```

**Extra Challenge:** Modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call `range(1, 10, 2)` should return `[1, 3, 5, 7, 9]`. Make sure it also works with negative step values so that `range(5, 2, -1)` produces `[5, 4, 3, 2]`.

---

## Challenge 8

**Warm-up Round:**

Write a function the converts a decimal number to a string-based representation of its binary equivalent.

**Convert RGB to Hex:**

Write a function that takes RGB values for a particular colour as individual arguments, then converts them to a single string-based representation of the corresponding hex code for that colour. Don't forget the leading `#`!

**Note:** It's very easy to obtain a solution to this challenge by heading right to Stack Overflow. Resist the urge! Before you search out a pre-fab solution, see how far you can get by looking into the `Number.prototype.toString()` method on MDN first.

---

## Challenge 9

Write a script that fetches a random taco recipe from the Taco Fancy API Randomizer and log it out like this example:

`"Asian Style Tofu or Pork Marinade with Potato Hash topped off with Chipotlé Sauce garnished with Mahi Mahi Rub and wrapped in delicious bad-ass tortillas."`

This is the endpoint you will use to access a random taco recipe:

http://taco-randomizer.herokuapp.com/random/

Sound easy? There's a catch. This challenge must be completed with plain vanilla JavaScript only. No jQuery (or any other library) allowed!

In order to make your `GET` request, look into the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) rather than using raw `XMLHTTPRequest` objects.

**Extra Challenge:** Create an `index.html` file and append this string to the DOM using plain vanilla JS too.

---

## Additional Resources

Knowledge goals to strive for throughout your career:

* [Programmer Competency Matrix](http://sijinjoseph.com/programmer-competency-matrix/)

More sample programmer interview questions:

* [Here's a pretty big list of programming interview questions I compiled while studying for big 4 interviews. I think you guys will find it useful!](https://www.reddit.com/r/cscareerquestions/comments/20ahfq/heres_a_pretty_big_list_of_programming_interview/)
* [Front-end Job Interview Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions) (awesome resource!)
* [Interview Questions and Exercises About CSS](https://css-tricks.com/interview-questions-css/)
* [Interview Cake](https://www.interviewcake.com/all-questions/javascript)

An interview prep course from Udacity (it's taught in Python, but worth a look!):

* [Technical Interview](https://www.udacity.com/course/technical-interview--ud513)
