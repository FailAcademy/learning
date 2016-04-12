---
layout: lesson
title: Advanced JavaScript
slides: ['_slides/week-03/01-advanced-javascript.md']
lesson_date: 2016-04-25

---

## Agenda

We'll take a close look at the quirks and unusual bits of the *ES5 JavaScript specification*. We'll discuss some puzzling and irritating language features, and how to avoid the common pitfalls associated with them when programming in JavaScript.

---

## Learning Objectives

###Type coercion
- Describe the circumstances where JavaScript will explicitly change they canonical type of a value
- Describe the behavior of the loose comparasin operator, `==` vs `===`

###Function scope and hoisting
- Define the purpose of an IIFE
- Define function scope
- Define hoisting
- Defing scope chaining

###Functions inside conditionals
- Describe the behavior of function expressions written inside conditional block
- Describe the behavior of function declarations written inside conditional blocks

###'Pass by Value' vs. 'Pass By Reference'
- Describe what is meant by 'Pass by value'
- Describe what is meant by 'Pass by reference'
 
###Methods, Objects, `this` & `bind`
- Describe why JavaScript provides a  `bind` method
- Describe ways to influence the value of `this` when extracting methods from objects 

---

##Exercise 1 - Type Coercion

####What will the output be?
```js
function printHi() {

    var myVar = 5; 

    if(myVar == '5') {  // 1
        console.log("Hi, from if block")
    }

    switch(myVar){      // 2
        case '5':
            console.log("Hi, from switch case block");        
    }
}

printHi(); 
```

####What will the output be?
```js
(function () {
    falseString = "false";      // 1
    if(true) {              
        var falseString;        // 2
        if(falseString) {       // 3
            console.log(falseString == true);   // 4
            console.log(falseString == false);  // 5
        }
    }
})();
```

---

##Exercise 2 - Function scope and hoisting (Review)

####What will the output be?
```js
var name = "John";

(function(){
    console.log("The name is : " + name);

    var name = "Jane";

    console.log("The name is : " +name);
})();
```

---

##Exercise 3 - Functions inside conditionals

####What will the output be?
```js
(function(){

    if(true){                               // 1

        function innerFunc() {              // 2

            console.log("innerFunc: Inside if");
        }

        var innerFuncExpr = function () {   // 3

            console.log("innerFuncExpr: Inside if");
        }
    } else {                                // 4

        function innerFunc() {              // 5    
            console.log("innerFunc: Inside else");
        }
        var innerFuncExpr = function () {   // 6

            console.log("innerFuncExpr: Inside else");
        }
    }

    innerFunc();                            // 7
    innerFuncExpr();                        // 8

})();
```


---

##Exercise 4 - 'Pass by Value' vs. 'Pass by Reference'

####What will the output be?
```js
var me = {                  // 1
    'partOf' : 'A Team'
}; 

function myTeam(me) {       // 2

    me = {                  // 3
        'belongsTo' : 'A Group'
    }; 
} 

function myGroup(me) {      // 4
    me.partOf = 'A Group'; // 5
} 

myTeam(me);     
console.log(me);            // 6

myGroup(me);
console.log(me);            // 7
```

---

##Exercise 5 - Methods, Objects, `this` & `bind`

####What will the output be?
```js
var myself = {
    myName: 'Tom',
    myNickNames: [ 'T-Dog', 'TotalTom' ],
    printMyNickNames: function () {
    'use strict';
        this.myNickNames.forEach(
            function (nickName) {  // 1
                console.log(this.myName +', nick: '+ nickName);  // 2
            }
        );
    }
};

myself.printMyNickNames();
```
    
---

## Lab Activity

Complete as many exercises as you can on the Free Code Camp JavaScript track here: [http://www.freecodecamp.com/map](http://www.freecodecamp.com/map).
Find the  **Basic JavaScript (10 hours)** track.
You'll be expected to get at least half way through the exercises by the end of the class.
Remember to **use your classmates** as a resource when trying to solve difficult exercises.

## There will be a prize for those folks who complete the most exercises correctly!

---
