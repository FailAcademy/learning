---
layout: lesson
title: The Programming Interview
lesson_date: 2017-07-28
---

## Pre-Work

We've covered a broad range of topics this week! As a front-end developer, you will often find yourself doing much more than simply writing HTML, CSS, and JavaScript. You will find yourself acting as a bridge between UX designers and back-end developers, and acting as an advocate for accessibility and performance concerns on website.

Well-rounded front-end developers will be able to write great code while also juggling all of these (sometimes competing) concerns in relation to the code that they write.

To put these myriad job responsibilities (and others!) into perspective, please read this article prior to class:

- [A Front End Developer is Aware](https://css-tricks.com/front-end-developer-aware/)

Come prepared with your thoughts and reflections on this article (especially in relation to your journey so far over the first month of the course). We will discuss it as a class, and then jump into our programming interview questions.

---

## Learning Objectives

- Apply logic in conjunction with previously-acquired front-end development skills to solve a series of abstract programming challenges.
- Practice for a technical interview by completing a sample set of programming interview challenges.

---

## Lab Activity (All-Day)

In today's lesson, you'll be presented with typical programming interview questions which you might encounter if you were applying for a job at a company like Facebook, Google, Amazon, or Microsoft (or even a local start-up).

The exercises today will be very difficult, but will only require using JavaScript techniques that you have already learned. You'll have the entire day to complete the questions.

You mission is to try to apply what you've learned, and attempt to come up with solutions to as many of the exercises as you can.

You may work on the questions as a group, or as part of more than one group to solve the exercises.

If you or your group comes up with a solution, we'll share it with the class, and discuss your implementation as well as discuss other potential solutions.

**Tips For Success:**

1. Take your time
2. Break down the problems into small steps
3. Think about what variables/values you'll need
4. Ask others for help if you're stuck!

*Good luck and have fun!*

---

## Question 1

Given a number that represents the position of the minute hand on a clock (i.e. number of minutes from 0&ndash;60) write a program that logs to the console the angle that is formed by the minute hand and 12.

If the user enters a number that is above 60, your program should fail, and log a friendly message to the console, informing the user of their error.

**Hint:** Create an HTML UI to capture input and display the result of running your algorithm.

---

## Question 2

Given a list of stock prices for a number of days, your goal is to return the maximum profit that could have been made by buying a stock at one price, and then selling the stock later on (for the sale price on that day).

What does this mean? For example, if given a list of stock prices per day of `[45, 24, 35, 31, 40, 38, 11]`, your program should return 16.

Why? For this particular list, if you had bought stock at 24 and sold it at 40, a profit of 16 was made. For this list, 16 is the largest profit you could have made buy buying and selling on specific days. If no profit could have been made, your program should `console.log()` "All is lost!".

Use this list to start: `[47, 50, 22, 11, 15, 90, 88]`

---

## Question 3

Create a function that reverses a string.

Your function must be capable of reversing an entire sentence, and preserving the order of words (reverse in place).<br/>

For example: "Hello how are you", becomes " Olleh woh era uoy".

**Extra Challenge:** Maintain capitalization of reversed words, like the example above.

**Did you know?** You can reverse the direction of a string using HTML using the `<bdo>` element!<br/>

For example:

`<p><bdo dir="rtl">Sometimes things go wrong!</bdo></p>` <br/>

**Results in:** !gnorw og sgnith semitemoS

---

## Question 4

Write a function to find the nearest link on a webpage given the mouse x,y coordinates.

If your algorithm just iterates through all the links, provide a recommendation for how to make it faster.

---

## Additional Resources

Knowledge goals to strive for throughout your career:

- [Programmer Competency Matrix](http://sijinjoseph.com/programmer-competency-matrix/)

More sample programmer interview questions:

- [Here's a pretty big list of programming interview questions I compiled while studying for big 4 interviews. I think you guys will find it useful!](https://www.reddit.com/r/cscareerquestions/comments/20ahfq/heres_a_pretty_big_list_of_programming_interview/)
- [Front-end Job Interview Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions) (awesome resource!)
- [Interview Questions and Exercises About CSS](https://css-tricks.com/interview-questions-css/)
