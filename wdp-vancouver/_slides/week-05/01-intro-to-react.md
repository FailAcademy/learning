---
layout: slidedeck
title: Introduction to React
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Introduction to React

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

####**Before we begin**
Use **npm** to install these dependencies in your new project!

- `react`
- `react-dom`
- `babel-loader` (dev)
- `babel-preset-es2015` (dev)
- `babel-preset-react` (dev)
- `webpack` (dev)
- `webpack-dev-server` (dev)

---
###Add the following configuration file into your project's root directory:
```js
// webpack.config.js
module.exports = {
    entry: './main.js',
    output: {
        filename: './build/main.js'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
```

---
layout: false
class: center, middle
# Exercise 1

Review the JavaScript methods `.filter()` & `.map()`

---
layout: false
class: center, middle

#Components
### The 'V' in 'MVC'

---

###Identify the Components
Idenitfy the parts of this User Interface that could be considered components:
[(Fullscreen image)](/public/img/slide-assets/airbnb-components.png)
![Airbnb Search Page](/public/img/slide-assets/airbnb-components.png)


---
#Exercise 2
In a file named `components.jsx`, create empty React components for each of the UI elements in the design.
(We'll talk about the .jsx extension in the upcoming slides).
<br/>
An empty React component in ES2015:
```js

import { React } from 'react';

class AwesomeComponent extends React.Component {
    render() {

    }
}

```

####All React components **must** define a render method!


---

#JSX
So far we've used HTML to structure and style the content of web pages. When we're writing React,
We'll be writing HTML inside of our JavaScript files (`.jsx` files), inside of our components!
<br/>
This approach is called co-location. It's convenient because all of the presentation (HTML structure)
is located in the same file as the JavaScript logic that controls it. (We have not written any logic yet).

---

###Rendering HTML with React

Displaying HTML in the page using react is done by **returning HTML from a components `render` method**

```js

class AwesomeComponent extends React.Component {
    render() {
        return (
            <div className="awesome-div">Hello React!</div>
        )
    }
}

```

---
###Link a component to index.html

So far we've written all of our HTML inside of a `.jsx` file.
To get the HTML to show up in your document, we must tell React where to load it:

```js

import { ReactDOM } from 'react-dom';

ReactDOM.render(<AwesomeComponent/>, document.querySelector('#mount'));

```
 ... and in your HTML
```html
<body>
    <div id="mount">
        <!-- React App! -->
    </div>
</body>
```

---
template: inverse
class: center, middle

#Awesome

---

# Discussion

- ####JSX
- ####Composing HTML
- ####'Co-Location' of code
- ####The Virtual DOM
- ####React DEV Tools

---
template: inverse

# Interactivity

---
template: inverse

![](/public/img/slide-assets/react-concepts-1way.png)

---

#UI Updates in React

In React, there is only one way (for our purposes) to update your component's user interface:
Modifying the state property of your component using `this.setState()`

---
#What is state?

![](http://www.animatedgif.net/furniture/jsflick_e0.gif)

---
###A Lightswitch Component

```js
class Lightswitch extends React.Component {

    constructor(props){
        super(props);
        this.state = { on: false };
    }

    _switch(){
        this.setState({ on: !this.state.on });
    }

    render(){
        return (
        <div>
            <h1>The light is { this.state.on ? 'ON' : 'OFF' }</h1>
            <button onClick={this._switch.bind(this)}>switch</button>
        </div>
        )
    }
}

ReactDOM.render(<Lightswitch/>, document.getElementById('container'));

```
---

# Discussion

- ####`render()` must return a single HTML node
- ####Use `.bind()` when the method has an internal refrence to `this`
- ####`state` is a special object in React Components
- ####What gets updated? (Dev tools)

---

template: inverse

# Questions?

---

template: inverse

##Let's Build a React Component!

---
{% endhighlight %}
