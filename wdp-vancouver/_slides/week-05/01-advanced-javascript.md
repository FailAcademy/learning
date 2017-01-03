---
layout: slidedeck
title: Advanced JS Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Advanced JavaScript

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Type coercion
2. Function scope and hoisting
3. Functions inside conditionals
4. Passing by value versus reference
5. Methods, objects, `this` & `bind`

---

# Exercise 1

**Type Coercion**

*Explanation:*

- The **if block** (#1), compares the **number** 5 with the **string** '5' with double equals (`==`). JavaScript does **coercion** when comparing "things" using `==` and due to this **coercion**, the `console.log` within the **if block** gets executed.
- Coercion does not happen for **variables** within the **switch statement**. **Switch statements** use strict type checking (`===`).

---

# Exercise 2

**Function Scope and Hoisting**

*Explanation:*

- **Hoisting**: Hoisting takes place during the parsing phase of executing a JS code. In this phase, all **variable declarations** are taken and a default value of `undefined` is assigned to them. Note that the code is not run in this phase, so any **assignment** of a **value** to a **variable** will not be executed.

.footnote[More on the next slide ...]

---

# Exercise 2

**Function Scope and Hoisting**

*Explanation:*

- **Function Scope**:  Every **variable** in JS is scoped at a function level, so this means that **variables** which are declared inside a function is not accessible outside the function in which it is declared.
- **Scope chaining**: When a **variable** is not found in a **function scope**, the execution environment traverses to an outer **scope** to look for it.

.footnote[More on the next slide ...]

---

# Exercise 2

**Function Scope and Hoisting**

- So in the code example, the **statement** `var name = "Jane"` declares a **variable** "name" which is local to the **function scope**. The outer **variable** which has the same **variable** name is ignored, and the **variable** in current **scope** is used.
- Hence the second **statement** `console.log("The name is : " + name);` logs a value "Jane".

---

# Exercise 3

**Functions Inside Conditionals**

*Explanation:*

- There are two types of functions inside the **if/else blocks**. The `innerFunc` is the commonly known **function declaration** and `innerFuncExpr` is the **function expression**.
- At any point of time, only one of the if or else **block** should get executed, in this case the if **block** at #1.

.footnote[More on the next slide ...]

---

# Exercise 3

**Functions Inside Conditionals**

- The first `console.log` output for the invocation at #7 suggests the `innerFunc` inside the **else block** is getting executed.
- To understand this behaviour, we have to understand how *hoisting* works in JS. The function `innerFunc` is declared within both the if and the else **block**, the JS engine **hoists** the function declarations to the top of the enclosing function!

.footnote[More on the next slide ...]

---

# Exercise 3

**Functions Inside Conditionals**

*Explanation:*

- There is only one **function declaration** and that is the one which JS engine encounters last during the parsing phase. So, in this case the else **block** `innerFunc` will overwrite the if **block** declaration, irrespective of where the declarations are within the **conditional blocks**. There is one `innerFunc` declaration and hence the output of the invocation at #7.

.footnote[More on the next slide ...]

---

# Exercise 3

**Functions Inside Conditionals**

*Explanation:*

- The `innerFuncExpr` is the **function expression**, which does not get **hoisted** to the top of the enclosing **function scope**. So, we see the proper `console.log` output for the invocation at #8.

.footnote[More on the next slide ...]

---

# Exercise 3

**Functions Inside Conditionals**

- Do not declare the **functions** or the **variables** within **conditional blocks** as JavaScript does not have **block scope**. In the JavaScript specs, **function declarations** are not allowed within **conditional blocks**.

- If you must, use a **function expression**, within the **conditional blocks**.

---

# Exercise 4

**Passing by Value versus Reference**

*Explanation:*

- JavaScript is neither **pass-by-value** or **pass-by-reference**! When the `myTeam` method is **invoked**, JavaScript is passing the **reference** to the `me` **object** as a **value**. The **invocation** itself creates two independent **references** to the same **object**, (though the name being same here (`me`), is misleading and gives us the impression that it is a single reference.

.footnote[More on the next slide ...]

---

# Exercise 4

**Passing by Value versus Reference**

- When we **assigned** a new **object** at #3, we are changing the **reference value** within the `myTeam` **function**, and it will not have any impact on the original **object** outside this **function scope**. Hence the output from #6.

.footnote[More on the next slide ...]

---

# Exercise 4

**Passing by Value versus Reference**

- In the case of the `myGroup` invocation, we are passing the **object** `me`. But unlike the previous scenario we described, we are not assigning this **variable** to any new **object**, This means the object **reference value** within the `myGroup` **function scope** still is the original object's **reference value** and when we are modifying the **property** within this **scope**, it is effectively modifying the original object's **property**. Hence, you get the output from #7.

---

# Exercise 5

**Methods, Objects, `this` & `bind`**

*Explanation:*

- The `forEach` method's callback function is **out of scope**. This means it has no reference to `this`, because it is not a method on the myself object.
- Only methods assigned as properties of objects **have access to their parent** using `this`, otherwise `this` returns undefined. Invoking `printMyNickNames` will result in a `TypeError`!

---

# Practice Makes Perfect

Today you'll practice what you've learned using a fantastic free online resource called [Free Code Camp](http://www.freecodecamp.com/ma).

Go to the Free Code Camp website, find the **Basic JavaScript (10 hours)** section, and complete as many of these exercises as you can today.

Remember to use your instructors and your fellow students as a resource if you're stuck.

**Good luck!**

---
template: inverse

# Questions?

{% endhighlight %}
