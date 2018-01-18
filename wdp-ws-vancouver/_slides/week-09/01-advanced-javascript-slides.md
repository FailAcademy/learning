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

1. Truthiness
2. Type coercion
3. Function scope and hoisting
4. Functions inside conditionals
5. Passing by value versus reference
6. Methods, objects, `this` & `bind`

---

class: center, middle

.large[
**[Wat](https://www.destroyallsoftware.com/talks/wat)**
]

---

# Wat

Your turn! Enter these into your console:

```js
1 + 2;
1 + "2";

"" == false;
0 == false;
null == false;
undefined == false;
null == undefined;

function f() {}

f + 100;
f + null;
f + [1, 2, 3, 4, 5] + undefined;
```

---

# Let's Talk About Truth

When is a BLANK not a BLANK? (work in pairs)

* String
* Number
* `null` value
* `undefined` value
* Array
* Object

---

# Let's Try It!

If you use two **bangs** (exclamation marks), you can force Javascript
to show you the true of false interpretation of a value.

```js
var str = "abcde";

console.log(str); // 'abcde'
console.log(!!str); // true
```

In your pairs, test out your theories on truthiness using `!!`.

_Why does this work?_

---

# Truthiness in Action

```js
function shoutOutLoud(wordToShout) {
  if (wordToShout) {
    console.log(wordToShout.toUpperCase());
  } else {
    console.log("[silence]");
  }
}

function talkLikeATeenager(words) {
  if (words && words.length) {
    console.log(words.join(", liiiike "));
  } else {
    console.log("Ugh, stop wasting my time");
  }
}
```

---

# Exercise 1

**Type Coercion**

Please [see the lesson page](/lesson/advanced-js/) for more details.

???

_Explanation:_

* The **if block** (#1), compares the **number** 5 with the **string** '5' with double equals (`==`). JavaScript does **coercion** when comparing "things" using `==` and due to this **coercion**, the `console.log` within the **if block** gets executed.
* Coercion does not happen for **variables** within the **switch statement**. **Switch statements** use strict type checking (`===`).

---

# Exercise 2

**Function Scope and Hoisting**

Please [see the lesson page](/lesson/advanced-js/) for more details.

???

_Explanation:_

**Hoisting**

Hoisting takes place during the parsing phase of executing a JS code. In this phase, all **variable declarations** are taken and a default value of `undefined` is assigned to them. Note that the code is not run in this phase, so any **assignment** of a **value** to a **variable** will not be executed.

**Function Scope**

Every **variable** in JS is scoped at a function level, so this means that **variables** which are declared inside a function is not accessible outside the function in which it is declared.

**Scope Chaining**

When a **variable** is not found in a **function scope**, the execution environment traverses to an outer **scope** to look for it.

So in the code example, the **statement** `var name = "Jane"` declares a **variable** "name" which is local to the **function scope**. The outer **variable** which has the same **variable** name is ignored, and the **variable** in current **scope** is used.

Hence the second **statement** `console.log("The name is : " + name);` logs a value "Jane".

---

# Exercise 3

**Functions Inside Conditionals**

Please [see the lesson page](/lesson/advanced-js/) for more details.

???

_Explanation:_

* There are two types of functions inside the **if/else blocks**. The `innerFunc` is the commonly known **function declaration** and `innerFuncExpr` is the **function expression**.
* At any point of time, only one of the if or else **block** should get executed, in this case the if **block** at #1.
* The first `console.log` output for the invocation at #7 suggests the `innerFunc` inside the **else block** is getting executed.
* To understand this behaviour, we have to understand how _hoisting_ works in JS. The function `innerFunc` is declared within both the if and the else **block**, the JS engine **hoists** the function declarations to the top of the enclosing function!
* There is only one **function declaration** and that is the one which JS engine encounters last during the parsing phase. So, in this case the else **block** `innerFunc` will overwrite the if **block** declaration, irrespective of where the declarations are within the **conditional blocks**. There is one `innerFunc` declaration and hence the output of the invocation at #7.
* The `innerFuncExpr` is the **function expression**, which does not get **hoisted** to the top of the enclosing **function scope**. So, we see the proper `console.log` output for the invocation at #8.
* Do not declare the **functions** or the **variables** within **conditional blocks** as JavaScript does not have **block scope**. In the JavaScript specs, **function declarations** are not allowed within **conditional blocks**.
* If you must, use a **function expression**, within the **conditional blocks**.

---

# Exercise 4

**Passing by Value versus Reference**

Please [see the lesson page](/lesson/advanced-js/) for more details.

???

_Explanation:_

* JavaScript is neither **pass-by-value** or **pass-by-reference**! When the `myTeam` method is **invoked**, JavaScript is passing the **reference** to the `me` **object** as a **value**. The **invocation** itself creates two independent **references** to the same **object**, (though the name being same here (`me`), is misleading and gives us the impression that it is a single reference.
* When we **assigned** a new **object** at #3, we are changing the **reference value** within the `myTeam` **function**, and it will not have any impact on the original **object** outside this **function scope**. Hence the output from #6.
* In the case of the `myGroup` invocation, we are passing the **object** `me`. But unlike the previous scenario we described, we are not assigning this **variable** to any new **object**, This means the object **reference value** within the `myGroup` **function scope** still is the original object's **reference value** and when we are modifying the **property** within this **scope**, it is effectively modifying the original object's **property**. Hence, you get the output from #7.

---

# Exercise 5

**Methods, Objects, `this` & `bind`**

Please [see the lesson page](/lesson/advanced-js/) for more details.

???

_Explanation:_

* The `forEach` method's callback function is **out of scope**. This means it has no reference to `this`, because it is not a method on the myself object.
* Only methods assigned as properties of objects **have access to their parent** using `this`, otherwise `this` returns undefined. Invoking `printMyNickNames` will result in a `TypeError`!

---

# What We've Learned

* How truthiness works in JS
* What type coercion is
* How function scope and hoisting work
* What happens to functions inside conditionals
* The difference between passing by value and passing by reference
* What `this` may refer to a JS program

---

template: inverse

# Questions?

{% endhighlight %}
