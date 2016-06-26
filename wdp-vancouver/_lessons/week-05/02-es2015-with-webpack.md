---
layout: lesson
title: Developing with ES2015 & Webpack
slides: ['_slides/week-05/02-es2015-with-webpack.md']
lesson_date: 2016-08-03
---

## Pre-Work

Watch the following short video tutorial on Webpack before class:

- [Getting Started with webpack](https://www.youtube.com/watch?v=TaWKUpahFZM)

Read the following articles before class:

- [Choosing a JavaScript Build Tool – Babel, Browserify, Webpack, Grunt and Gulp](http://jamesknelson.com/which-build-system-should-i-use-for-my-javascript-app/)
- [Why npm Scripts?](https://css-tricks.com/why-npm-scripts/)

Also take some time before class to explore the [Webpack documentation](https://webpack.github.io/docs/) page.

---

## Learning Objectives

- Install the Webpack compiler in a development environment.
- Explore Webpack's CLI and 'loader' interface.
- Use Webpack with Babel to transpile JavaScript code from ES2015 to ES5.
- Use Webpack to transform and bundle SCSS files.
- Use Webpack to set up source maps for compiled files (both CSS and JS).
- Use Webpack's development server to watch files and compile on save.
- Use npm scripts to run the Webpack CLI commands.

---

## Keywords

- Module bundler
- Module loader
- Source map

---

## Exercise 1

Set up a **new project** with Webpack:

1. Create a new folder for your project:
    - Remember to run `npm init` in your project's root directory.
    - Remember to create a `.gitignore` file and add `node_modules` at the top
2. Create the following folders within:
    - `src`
    - `dist`
3. Create the following files:
    - `index.html` (in project root)
    - `main.scss` (in `src`)
    - `main.js` (in `src`)
    - `webpack.config.js` (in project root)

In `webpack.config.js` add the following code:

```js
module.exports = {
   entry: './src/main.js',
   output: {
      filename: './build/bundle.js'
   }
};
```

Run `npm install --save-dev webpack webpack-dev-server`

Once everything is set up we'll observe what happens when we run the following CLI commands:

- `webpack` for building once for development
- `webpack -p` for building once for production (minification)
- `webpack --watch` for continuous incremental build in development (fast!)
- `webpack -d` to include source maps

We'll experiment with the other CLI command options documented here:
https://webpack.github.io/docs/cli.html

---

## Exercise 2

Now that Webpack is creating a *JavaScript bundle*, let's add some configuration for compiling ES2015.

We'll do this using a **Webpack loader**:

First, run the following commands (in your project's root directory):

- `npm install --save-dev babel-core`
- `npm install --save-dev babel-loader`
- `npm install --save-dev babel-preset-es2015`

Next, update your webpack.config.js file:

```js
// ...

module: {
   loaders: [
   {
     test: /\.js$/,
     loader: 'babel-loader',
     query: {
       presets: ['es2015']
     }
   }
 ]
}

// ...the rest
```

---

## Exercise 3

Webpack can be used to bundle almost every kind of asset for the web. It's very flexible in this regard.

Let's use Webpack to compile our `.scss` files:

First, run the following commands (in your project's root directory):

- `npm install --save-dev sass-loader`
- `npm install --save-dev css-loader`
- `npm install --save-dev style-loader`
- `npm install --save-dev node-sass`

Next, add the following code to your webpack.config.js Inside the `loaders` Array,
after the JavaScript loader.

```js
// ...

module: {
   loaders: [
   // ...other loaders...
   {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
   }]
}

// ...the rest
```

---

## Exercise 4

Now that we're compiling our source files into a JavaScript bundle, we'll have to take some extra steps in order to debug our compiled and bundled code.

First, add a dev server configuration to your webpack.config.js file:

```js
//...

devServer: {
   watch:true,
   inline: true,
   host: '0.0.0.0',
   port: '3000',
   watchOptions: {
      aggregateTimeout: 300,
      poll: true
   }
},

//...the rest
```

And add source maps to make it easier to debug your code:

```js
// ...

module: {
   loaders: [
   // ...other loaders...
   {
      test: /\.scss$/,
      loaders: ["style", "css?sourceMap", "sass?sourceMap"]
   }]
}

// ...the rest
```

Run: `webpack-dev-server` to view your site in the browser @ **localhost:3000**.

---

## Exercise 5

Now that Webpack is set up for development let's create a convenient command for running the development server in our project:

Add the following to your `package.json`:

```js
// ...

"scripts": {
    "start": "webpack-dev-server"
 }

// ... the rest
```

To test this script, run: `npm start` form the command line.

---

## Lab Activity

We'll install Webpack in our Instanews project and spend our time in class today removing Gulp, and replacing all functionality with its Webpack equivalent.

---

## Additional Resources

Official Webpack documentation:

- [Webpack homepage](https://webpack.github.io/)
- [Webpack Dev Server Documentation](https://webpack.github.io/docs/webpack-dev-server.html)

A beginner-friendly guide to Webpack:

- [webpack-howto](https://github.com/petehunt/webpack-howto)
