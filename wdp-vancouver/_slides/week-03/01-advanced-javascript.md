---
layout: slidedeck
title: Advanced JS Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Advanced JS Exercises

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

####Exercise 1 - Type coercion

Explanation: <br/>
- The if block (#1), compares the number 5 with the string '5' with double equals. JavaScript does coercion when comparing "things" using == and due to this coercion, the console.log within the if block gets executed. 
- Is the coercion not applicable to switch case block (#2)? Well, the console.log within the case statement didn't get executed. Coercion is not application for variables within the switch statement as switches use strict type checking (===).

---

####Exercise 2 - Function scope and hoisting 

**Explanation**: <br/>
- **Hoisting** : Hoisting takes place during the parsing phase of executing a JS code. In this phase, all the variables declarations are taken and a default value of "undefined" is assigned to them. Note that the code is not run in this phase, so any assignment of a value to a variable will not be executed.
- **Function Scope** :  Every variable in JS is scoped at a function level, means variables which are declared inside a function is not accessible outside the function in which it is declared.
 
 .footnote[more on next slide ...]
---

####Exercise 2 - Function scope and hoisting 

**Explanation**: <br/>
- **Scope chaining** : When a variable is not found in a function scope, the execution environment traverses to an outer scope to find the same. Otherwise, the variable which is found in the current scope is used. 
- So in the code example, the statement var name = "Jane" declares a variable "name" which is local to the function scope. So the outer variable which has the same variable name is ignored, and the variable in current scope is used. Hence the second statement console.log("The name is : " + name); logs a value Jane.

---

####Exercise 3 - Functions inside conditionals

**Explanation**: <br/>
- There are two types of functions inside the if else blocks. The innerFunc is the commonly known function declaration and innerFuncExpr is the function expression. At any point of time, only one of the if or else block should get executed, in this case the if block at #1.

 .footnote[more on next slide ...]
---

####Exercise 3 -  Functions inside conditionals

- But the first console.log output for the invocation at #7 suggests as if the else block innerFunc is getting executed. To understand this behaviour, we have to know the concept of JavaScript Hoisting. Here though the function innerFunc is declared within both the if and the else block, the JS engine hoists the function declarations to the top of the enclosing function.

 .footnote[more on next slide ...]
---

####Exercise 3 -  Functions inside conditionals

- Effectively there is only one function declaration and that is the one which JS engine encounters last during the parsing phase. So, in this case the else block innerFunc will overwrite the if block declaration, irrespective of where the declarations are within the conditional blocks, there is only one innerFunc declaration and hence the output of the invocation at #7

- The innerFuncExpr is the function expression, which does not get hoisted to the top of the enclosing function scope. So, we see the proper console.log output for the invocation at #8.

 .footnote[more on next slide ...]
---

####Exercise 3 -  Functions inside conditionals

- Do not declare the functions or the variables within the conditional blocks as JS does not ensure block scope. In fact, going by JS specs function declarations are not allowed within the conditional blocks, however different browsers allow 

- If you must, use function expression instead within the conditional blocks.
---

####Exercise 4 - 'Pass by Value’ vs. 'Pass by Reference’

**Explanation**: <br/>
- JavaScript is pass-by-value, technically. It is neither pass-by-value or pass-by-reference, going by the truest sense of these terms. When the myTeam gets invoked, JavaScript is passing the reference to me object as value, as it is an object and invocation itself creates two independent references to the same object, (though the name being same here i.e. me, is misleading and gives us an impression that it is the single reference) and hence, the reference variable themselves are independent.

 .footnote[more on next slide ...]
---
####Exercise 4 - 'Pass by Value’ vs. 'Pass by Reference’

- When we assigned a new object at #3, we are changing this reference value entirely within the myTeam function, and it will not have any impact on the original object outside this function scope, from where it was passed and the reference in the outside scope is going to retain the original object and hence the output from #6.

 .footnote[more on next slide ...]
---
####Exercise 4 - 'Pass by Value’ vs. 'Pass by Reference’

- In the case of myGroup invocation, we are passing the object me. But unlike the above scenario, we are not assigning this variable to any new object, effectively meaning the object reference value within the myGroup function scope still is the original object's reference value and when we are modifying the property within this scope, it is effectively modifying the original object's property. Hence, you get the output from #7.

---

# Practice makes perfect

Today you'll practice what you've learned using a fantastic free online resource.
Open [http://www.freecodecamp.com/map](http://www.freecodecamp.com/map), and find the **'Basic JavaScript (10 hours)'** section. Complete as many of these exercises as you can today.

Remember to use your instructors and your fellow students as a resource if you're stuck.

.large[ **Good Luck!** ]

---

template: inverse

# Questions?

{% endhighlight %}
