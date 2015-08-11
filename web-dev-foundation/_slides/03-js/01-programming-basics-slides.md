---
layout: slidedeck
title: Programming Basics Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Programming Basics<br /> (with Scratch)

.title-logo[![Red logo](../../public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is programming?
2. Pseudocode
3. Basic programming concepts with Scratch

---
template: inverse

# What is Programming?

---
class: center, middle

### Programming, Demystified

When we **program** we are simply writing a list of **instructions** a our computer to follow, in a language it will understand.

---
class: center, middle

### What is a programming language?

It's an agreed-upon way to create instructions that a computer or other machine can understand.

---
template: inverse

# Pseudocode

---
class: center, middle

.large[
   Wouldn't it be nice...
]

![Human to machine](/public/img/human-to-machine.png)

---

# Pseudocode

Pseudocode is code that's meant for human reading, not machine reading.

Pseudocode simply writing out an algorithm in human-readable words, instead of computer code.

---
class: center, middle

.large[
   Wait, what's an algorithm?
]

---
class: center, middle

### Fancy Word, Simple Meaning

An algorithm is a **self-contained set of instructions** to be followed in order to complete a task.

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

Remember **variables** from junior high alegbra? Back then, we used letter as variables to represent numbers.

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

# Exercise 2

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
