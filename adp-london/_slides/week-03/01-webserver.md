---
layout: slidedeck
title: Creating a Web Server Slides

---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---
# Create a WebServer

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Write and run a simple 'hello world' http server in Node
2. Handle a request and response from an external 3rd party API
3. Distinguish between client and server
4. Install and setup Express.js
5. Create a 'hello world' http server using Express
6. Use basic routing between urls
7. Use REST methods to communicate (GET, POST, PUT, DELETE)

---
template: inverse


#What is a Web Server?

---

Definition

1. Server: A person or thing that provides a service or commodity, in particular.

2. Web: a network of fine threads constructed by a spider from fluid secreted by its spinnerets, used to catch its prey.

---
class: center, middle

![Application Architecture](/public/img/slide-assets/web_architecture.jpg)

 
source:http://www.tutorialspoint.com/nodejs/nodejs_web_module.htm)

---
#Metaphor

Think of a webserver like a waiter and a chef.

You can request and there hopefully will be a response.

Also you can Delete or Edit your order.

---
template: inverse

#Why do I need a Web Server?

---
##Exercise 1 

[Click on this link and read this article](https://webhostinggeeks.com/blog/what-are-web-servers-and-why-are-they-needed/)

After you are done find a partner and discuss why we use these things called servers. 

Bonus: What are some commonly used servers?

---
##Exercise 2

Go to Github: https://github.com/BFriz/nodeServer

Clone down the repo and get it up and running.

Now open up the Question.md file and answer each of them.

---
##Exercise 3

Time for you to build your own web server. In groups of two explore(build) the framework that you are provided. Sinatra took the opposite approach of Rails in that it only has the basics of what you need for a web application. No magic, no unicorns

1. Hapi (Sinatra-like)
2. Koa (Sinatra-like)
3. Sail.js (rails-like)
4. Express (Sinatra-like)
 

---
#Reading time

https://www.airpair.com/node.js/posts/nodejs-framework-comparison-express-koa-hapi

I actually want to hear your opinion now.

---
#Download Express

Express I thought so.....so:

Group number 4 (Express) will teach the rest of the class how to install and setup Express.

---
#Routing
Run:
```
npm init -y
npm i -S express
touch index.js
```
Paste in index.js:
```
var express = require('express');
var app = express()

app.get('/', function (req, res) {
  res.send("hello, world!")
})
```
```
var server = app.listen(3000, function() {
  console.log("server running at http://localhost:" + server.address().port)
})
```

---
#update package.json
```
"start": "node index.js"
```
---
#nodemon
Annoying when you have to stop the server whenever we make a change so...
```
npm i -D nodemon
```
Will automatically restart the server when changes are made

Create a dev script in your package.json "dev": "nodemon index.js"
```
npm run dev
```
---
##Exercise 4
We will be adding the below to our index.js
```
var fs = require('fs');
var _ = require('lodash');
!(have to install lodash)
var users = [];
```
Research why we are adding these and we will talk about it in class. 


---

#User model
```
fs.readFile('users.json', {encoding: 'utf8'}, function (err, data) {
  if (err) throw err
```
```
  JSON.parse(data).forEach(function (user) {
    user.name.full = _.startCase(user.name.first + ' ' + user.name.last)
    users.push(user)
  })
})
```

---
#JSON
Go to github

Link to be decided. 

---
#app.get
```
app.get('/', function (req, res) {
```
```
  var buffer = ''

  users.forEach(function (user) {
    buffer += '<a href="/' + user.username + '">' + user.name.full + 
    '</a><br>'
  })
```
```
  res.send(buffer)
})
```

What happens when you click on the link now?
(Cannot GET)

---
#Dynamic

we need to dynamically load the url based on the username. We can do that by user  : and params.
```
app.get('/:username', function (req, res) {
  var username = req.params.username
  res.send(username)
})
```
---
#HTTP Verbs

So far we have been using GET that will let you modify data.

need body.parser (does exactly what it sounds like - it allows you to parse the body of the request)

---
#Put or Edit
```
app.put
```

---
#Delete
```
app.delete
```
{% endhighlight %}
