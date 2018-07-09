---
layout: slidedeck
title: Intro to Programming Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---
# Intro to Programming

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is programming?
2. Using pseudocode
3. Thinking like a programmer
4. Basic programming concepts with Scratch

---
template: inverse

# What is Programming?

---
class: center, middle

.inline-images[
   ![Programming like a boss](/public/img/slide-assets/programming-moms-basement.jpg)
]

---
class: center, middle

.inline-images[
   ![You didn't say the magic word](/public/img/slide-assets/programming-nedry.jpg)
]

---
class: center, middle

.large[
   There's [subreddit](https://www.reddit.com/r/itsaunixsystem/comments/4rvcuw/white_collar_paint_the_best_spreadsheet_editor_in/) for that...
]

---
class: center, middle

.inline-images[
   ![Not sure...](/public/img/slide-assets/programming-not-sure.jpg)
]

---
class: center, middle

.inline-images[
   ![Two states of every programmer](/public/img/slide-assets/programming-two-states.jpg)
]

---
class: center, middle

### Programming, Demystified

When we **program** we are simply writing a list of **instructions** for our computer to follow, in a language it will understand.

---
class: center, middle

<iframe width="100%" height="400" src="https://www.youtube.com/embed/QaTx1J7ZeLY" frameborder="0" allowfullscreen></iframe>

---
class: center, middle

### What is a programming language?

It's an agreed-upon way to create instructions that a computer or other machine can understand.

---
class: center, middle

.large[
   What's an **algorithm**?
]

---
class: center, middle

.inline-images[
   ![Al Gore Rhythm](/public/img/slide-assets/al-gore-rhythm.jpg)
]

**Al Gore Rhythm?**

---
class: center, middle

**Actually it's a set of instructions**

.inline-images[
   ![Simple Algorithm FlowChart](/public/img/slide-assets/algorithm-simple-flowchart.png)
]

---

class: center, middle

### Fancy Word, Simple Meaning

An algorithm is a **self-contained set of instructions** to be followed in order to complete a task.

Much of programming is writing very simple algorithms.

---
class: center, middle

<iframe width="100%" height="400" src="https://www.youtube.com/embed/CvSOaYi89B4" frameborder="0" allowfullscreen></iframe>

<a href="https://visualgo.net/en" target="_blank">Visualising Algorithms</a>

---
template: inverse

# Using Pseudocode

---

class: center, middle

.large[
   Wouldn't it be nice...
]

![Human to machine](/public/img/human-to-machine.png)

---

# Pseudocode

Pseudocode is code that's meant for human reading, not machine reading.

Pseudocode is simply writing out an algorithm in human-readable words, instead of computer code.

---

# Pseudocode Example

In programming, we can create a **statement** to provide an individual instruction to our computer.

For example, in pseudocode, if we wanted to print the phrase "Hello World!", we might use the following statement:

```
write "Hello world!"
```

---

# Pseudocode Example

If we wanted to create an algorithm that prints out a message to tell a student how they did on a project, we could write:

```
if student aces project
   write "Passed"
else
   write "Needs more work"
```

The words **if** and **else** are often used in programming to conditionally run a block of code.

They're the programming equivalent of a fork in the road.

---

# Pseudocode Example

We can also write code that runs more than once. This is called a **loop**.

In this case, the code (and the beer) will continue to run on a continuous loop while students are present and as long as it's Friday evening:

```
while students are present
   if it's Friday evening
      keep the beer taps flowing
```

---

# Pseudocode Example

Remember **variables** from junior high algebra? Back then, we used letter as variables to represent numbers.

In programming, we can use variables to represent a wider variety of things:

```
let attendance = 0

for each student that enter the class
   attendance = attendance + 1

write attendance
```

Note that the word **for** is another way to make a block of code will loop over and over again until it has a reason to stop.

---

# Exercise 1

Time to write some pseudocode of your own! You're going to use pseudocode to write an algorithm for washing a car.

Some things to consider while writing your algorithm:

- The weather...you don't want to wash you car if it's raining.
- Each individual step involved in washing the car. Remember that machines can only do exactly what we tell them to do.
- How long each step should take place. Is it something that happens only once, or does it need to happen repeatedly?

---
template: inverse

# Thinking Like a Programmer

---
class: center, middle

.inline-images[
   ![Guide to software developer job advertisements](/public/img/slide-assets/dev-job-ads.jpg)
]

???

Now that we are starting to think like a programmer our perception of everything may change.

It's a little silly but here are some terms you may see in job postings and their 'programmer' interpretations.

---
class: center, middle

### What about the term computer science?

???

Ok that's silly but what about real terms like "Computer Science"?

Is the bar too high for new developers to enter the field without years of comp sci?

Are we going to be locked in a large room full of giant computers that we need to know all the inner workings of?


---
class: center, middle

.inline-images[
   ![Mid-century IBM Computer](/public/img/slide-assets/ibm-old-comp.jpg)
]

???

Although this may have been the case in the early days of computing, we now have lots of tools available to make writing complex programs easier.

You may hear a term often called **abstraction**, this basically just means there's some more complex code going on behind the scenes that has been abstracted to make writing programs quicker and easier.

---

# Using "High-Technology"

"There is a body of knowledge about algorithms, data structures, mathematics, and other gee-whiz stuff that most programmers know about but rarely use. In practice, this wonderful stuff is too complicated and generally unnecessary."

**What are some scenarios where knowledge of the inner workings of computers would be helpful, as a web developer?**

.footnote[.red[* ]Source: [How To Be A Programmer](https://github.com/braydie/HowToBeAProgrammer/)]

???

**Q:** What are some scenarios where knowledge of the inner workings of computers would be helpful, as a web developer?

**A:** Could be many reasons... Debugging, understanding how variables are stored in memory, navigating and performing operations on a server, performance optimization e.g. c++ vs c#

---
class: center, middle

.inline-images[
   ![WordPress - Code is Poetry](/public/img/slide-assets/code-is-poetry.svg)
]

???

Speaking of abstracted code, WordPress has a ton of functionality built in that we can use to build websites quickly.

We won't need to reinvent the wheel since WordPress solves a lot of common puzzles for us.

---
class: center, middle

.inline-images[
   ![Code is Poetry tattoo](/public/img/slide-assets/code-is-poetry-tattoo.jpg)
]

???

Some people are very passionate about their development tools.
Guess what they are not alone, you will likely find meetups, subreddits, linkedin groups dedicated to different topics e.g. WordPress, PHP, JavaScript, CSS etc...

---
class: center, middle

### Culture:

Could you be that person?

???

Could you be that person?

It doesn't mean you need to get a bad tattoo!

You may end up using some tools so much that they become part of your daily routines, e.g. checking out what's new in the world of WordPress, React, etc...

---

# Are You That Person?

Programming, as an occupation, has a very young culture.

It's not what you think it is, it's changing rapidly.

Stereotypes are being broken down as more people learn how to do it, and as the tools programmers use to write software improve.

**All good software goes through iterations.**

???

Again iterations, meaning you will be constantly improving on your dev journey.

Don't worry if things seem overwhelming with large code bases such as WordPress.
Over time with projects and practice you will get familiar with common WordPress functions and overall structures.

Are you that person? Just meaning do you have the passion to go on a deep dive into a subject, borderline obsession, hence the bad tattoos.

---
class: center, middle

### Open Source FTW!

Check out the [WordPress Trac](https://core.trac.wordpress.org/tickets/latest) to see how people around the world are contributing to this piece of software right now.

Their contributions (and potentially yours one day!) will impact how over 30% of of the top 10 million sites on the web run.

???

Speaking of passion, WordPress is open source and passionate devs are contributing to the codebase daily!

---
class: center, middle

### Pre-requisite:

Learn to type.

???

Ok, enough hype about WordPress, before we dig in we need to make sure we have some basics down.

---
class: center, middle

.inline-images[
   ![Typing like a boss](/public/img/slide-assets/typing.gif)
]

---

# Learn to Type

This may seem obvious. More specifically, you should aim to gain some level of ability to **touch-type**, which means typing without looking at the keyboard.

Being a fast typist is not a requirement for being a good programmer, but it will save you time.

If you're working on a team, you'll also me typing a lot of emails, chat messages, project briefs and so on. Communication gets easier when you have mastered the tools you'll use for it.

---

# Exercise 2

**How fast can you type?**

Lets get a sense of how fast you can type!

Let's visit [10 Fast Fingers](http://10fastfingers.com/typing-test/english), create an account and take the typing test and share your WPM! 
<br/><br/>
Once you've completed the english typing test. Let's see how fast you can type code! Visit [Typing.io](https://typing.io/) and sign in. Select the JavaScript test and start typing!

---
class: center, middle

.large[
   Now take some shortcuts...
]

???

Emmet 😁

<a href="https://docs.emmet.io/cheat-sheet/" target="_blank">Emmet Cheat Sheet</a>

e.g. `ul>li.item{item $}*5`

---

# Your Code Editor is Your New Best Friend

Your code editor has a wealth of functionality designed to save you time. Take advantage of these facilities and spend a little time configuring things for maximum productivity:

- Your color scheme can help you read code faster
- Snippets are a great way to write **boilerplate** code quickly
- Editor plugins like [**Emmet**](http://docs.emmet.io/) provide dozens of keyboard shortcuts that can help you write repetitive code faster

???

Show emmet cheat sheet and example...

Show how to make snippets in VSCode?

Show how to find in VSCode and other tips/tricks e.g. find/replace

---
class: center, middle

.large[
   Optimize your development environment.
]

???

Show user settings...

Talk again about extensions.

---

class: center, middle

.large[
   Stay organized.
]

???

When in doubt `pwd`

---
class: center, middle

> "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."

&mdash;Brian W. Kernighan

---

# Debugging

"Debugging is the cornerstone of being a programmer. The first meaning of the verb "debug" is to remove errors, but the meaning that really matters is to see into the execution of a program by examining it. A programmer that cannot debug effectively is blind."

.footnote[.red[* ]Source: [How To Be A Programmer](https://github.com/braydie/HowToBeAProgrammer/)]

---

# Debugging Using a Log

Logs help us understand what's happening with our code.

In JavaScript, we can use `console.log()` to print values into the *browser console*:

```js
function addNumbers(num1, num2) {
      // we can print the value of num1 and num2
      // to the debugging console in your browser
      // whenever your program executes this function!
      console.log(num1, num2);
      console.log(num1 + num2);
      return num1 + num2;
}
```

---

# Debugging Is Fun!

Debugging begins with a mystery, and finding solutions to bugs will often lead you to a better understanding of the program you're writing, and the language you are using.

Embrace the process. As a programmer 50% or more of your time will be spent debugging. More so in different circumstances, like working with older codebases, or code you don't initially understand, but you've been tasked to improve.

There are all scenarios you'll encounter if you're destined to work as a full-time programmer.

???

Ok is it really fun?

Well I think so, just approach everything as a puzzle that you want to solve, and debugging can help you to solve the puzzle quicker and in a more logical way.

---
class: center, middle

.large[
   Take a break when you're stumped!
]

???

Too much fun?

Take a break, also you could try practicing coding using a timer and the Pomodoro technique.
e.g. every 25 mins take a 5 min break.

---

# Up Your Coding Game

How to improve your coding chops:

1. Look at other people's code
2. Run other people's code
3. Write more code!
4. Learn to love your IDE/debugger

Programming is a challenging creative activity, and looking at how others have solved problems will help you improve your own repertoire.

???

Codepen can be a very intersting playground to explore and find inspiration.

Also github of course, so much code online to explore!!!
Did you know you can inspect the code for Apollo 11?
<a href="https://github.com/chrislgarry/Apollo-11" target="_blank">Apollo 11 source code</a>

I don't understand the code but it's pretty neat that it's publicly available.

---
class: center, middle

.large[
   Last but not least,<br />you need to love to learn.
]

---

# Always Be Learning

Learning is both rewarding and challenging.

The love of learning, and making a conscious effort to improve how you learn is an essential skill of any successful programmer.

(This is my favourite part of the job.)

???

Need more inspiration, podcasts can be helpful.
Some good ones, Syntax, The Debug Log, Breaking Math.

---

template: inverse

# Getting Started with Scratch

---

# What is Scratch?

Scratch is a programming language that makes it easy to create interactive stories, games, and animations.

.inline-images[
   ![Scratch cat](/public/img/slide-assets/scratch-logo.jpg)
]

---

# Scratch Demo

Let's take a look at a simple Scratch demo:

https://scratch.mit.edu/projects/72835184/#player

---

# Let's Play!

We'll need a some volunteers now...

https://scratch.mit.edu/projects/12352154/#player

https://scratch.mit.edu/projects/232913/#player

---

# Statements

Just like in pseudocode, statements provide an individual instruction to computer about a task it needs to perform:

.inline-images[
   ![Scratch statement](/public/img/slide-assets/scratch-statement.png)
]

---

# Variables

Remember, like algebra, variables are placeholders for a value:

.inline-images[
   ![Scratch variable](/public/img/slide-assets/scratch-variable.png)
]

Variables can be **strings** of text, **integers**, or **Boolean** values such as 0/1 or true/false.

---

# Boolean Expressions

In addition to creating Boolean variables, we can create Boolean expressions.

What that means is that when the expressions is evaluated, it will either be **true (1)** or **false (0)**:

.inline-images[
   ![Scratch Boolean expression](/public/img/slide-assets/scratch-boolean-01.png)
   ![Scratch Boolean expression](/public/img/slide-assets/scratch-boolean-02.png)
]

Using Boolean expressions we can construct conditions to direct a computer when to run certain code.

---

# Conditions

A condition is something that must be true in order for your code to run. Just like in pseudocode, the presence of **if** and **else** indicate that code will be run conditionally:

.inline-images[
   ![Scratch if condition](/public/img/slide-assets/scratch-if.png)
   ![Scratch if else condition](/public/img/slide-assets/scratch-if-else.png)
]

---

# Conditions

In Scratch, the words **when** and **until** provide additional conditional constructs:

.inline-images[
   ![Scratch when condition](/public/img/slide-assets/scratch-when.png)
   ![Scratch until condition](/public/img/slide-assets/scratch-until.png)
]

---

# Loops

Loops will execute a statement or block of statements over and over again until it has a reason to stop.

In Scratch, the **forever** and **repeat** block allow us to create loops:

.inline-images[
   ![Scratch forever loop](/public/img/slide-assets/scratch-forever.png)
   ![Scratch repeat loop](/public/img/slide-assets/scratch-repeat.png)
]

---

# Operators

Operators allow us to check if multiple conditions are true or false before running our code:

.inline-images[
   ![Scratch operator](/public/img/slide-assets/scratch-operator.png)
]

In Scratch, operator blocks include **<**, **>**, **=**, **and**, **or**, and **not**.

---

# Functions

We can also create custom blocks to encapsulate special chunks of code that we want to use over and over again:

.inline-images[
   ![Scratch defined function](/public/img/slide-assets/scratch-define-func.png)
   ![Scratch used function](/public/img/slide-assets/scratch-use-func.png)
]

In programming, these custom blocks are often referred to as **functions** or **methods**.

---

# Exercise 3

Your turn...**[create a Scratch account](https://scratch.mit.edu/)** and give it a whirl.

For this exercise, your **first task** is to create a basic program using one of the Scratch sprites (or more than one if you're feeling ambitious).

Your **second task** is to make sure you have fun with this :)

---

# What We've Learned

1. What pseudocode is
2. What an algorithm is
3. How to use a "graphical" programming language like Scratch
4. What variables, statements, loops, booleans, conditions, operators, and functions are

---
template: inverse

# Questions?

{% endhighlight %}
