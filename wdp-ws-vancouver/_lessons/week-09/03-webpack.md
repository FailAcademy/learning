---
layout: lesson
title: Developing with ES2015 and Webpack
slides: ['_slides/week-09/03-webpack-slides.md']
lesson_date: 2018-04-07
---

## Pre-Work

Read the following articles before class:

* [Choosing a JavaScript Build Tool – Babel, Browserify, Webpack, Grunt and Gulp](http://jamesknelson.com/which-build-system-should-i-use-for-my-javascript-app/)

Also take some time before class to explore the [Webpack documentation](https://webpack.js.org/) page.

---

## Learning Objectives

* Install the Webpack compiler in a development environment.
* Explore Webpack's CLI and 'loader' interface.
* Use Webpack to transform and bundle SCSS files.
* Use Webpack to set up source maps for compiled files (both CSS and JS).
* Use Webpack's development server to watch files and compile on save.
* Use npm scripts to run the Webpack CLI commands.
* Create JavaScript modules using the `import` and `export` keywords to write more modular code without polluting the global namespace.

---

## Keywords

* Module bundler
* Module loader
* Source map

---

## Exercise 1

Set up a **new project** with Webpack:

1. Create a new folder for your project:
   * Remember to run `npm init` in your project's root directory.
   * Remember to create a `.gitignore` file and add `node_modules` at the top
2. Create the following folders within:
   * `src`
   * `build`
3. Create the following files:
   * `index.html` (in project root)
   * `main.scss` (in `src`)
   * `main.js` (in `src`)
   * `webpack.config.js` (in project root)

In `webpack.config.js` add the following code:

```js
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "./build/bundle.js"
  }
};
```

Important: All of your `webpack.config.js` code will be inside of the above object separated by commas.

Run `npm install -g webpack`

Once everything is set up we'll observe what happens when we run the following CLI commands:

* `webpack` for building once for development
* `webpack -p` for building once for production (minification)
* `webpack --watch` for continuous incremental build in development (fast!)
* `webpack -d` to include source maps

We'll experiment with the other CLI command options documented here:
https://webpack.github.io/docs/cli.html

---

## Exercise 2

We'll want a development server to serve a webpage that contains our JavaScript bundle.

With Webpack, this is simple! Run: `npm install -g webpack-dev-server`

Once this command is finished, from the terminal in the root of your project run: `webpack-dev-server`

Congratulations, you have a development server that will reload your browser when you change the files in the `src` directory.

---

## Exercise 3

Webpack can be used to bundle almost every kind of asset for the web. It's very flexible in this regard.

Let's use Webpack to compile our `.scss` files:

First, run the following commands (in your project's root directory):

* `npm install --save-dev sass-loader`
* `npm install --save-dev css-loader`
* `npm install --save-dev style-loader`
* `npm install --save-dev node-sass`

Next, add the following code to your webpack.config.js Inside the `rules` Array, after the JavaScript loader.

```js
// ...

module: {
  rules: [
    // ...other loaders...
    {
      test: /\.scss$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },
        {
          loader: "sass-loader"
        }
      ]
    }
  ];
}

// ...the rest
```

Once you've added your loaders, `import` your `.scss` file into `main.js`, restart webpack-dev-server. Your `.scss` styles should visible in the browser.

---

## Exercise 4

Webpack can also be used to handle files, such as fonts and images.

`npm install --save-dev file-loader`

Add the following loader to your list of loaders in "webpack.config.js":

```js
{
  test: /\.(eot|svg|ttf|woff|woff2)$/,
  use: [{
    loader: 'file?name=public/fonts/[name].[ext]'
  }]
}
```

Create `/public/fonts` folder in your project. Any fonts you import into your `.scss` from this folder will be added to `bundle.js`.

---

## Lab Activity (Today)

We'll install Webpack in our Instanews project and spend our time in class today removing Gulp, and replacing all functionality with its Webpack equivalent.

---

## Additional Resources

Official Webpack documentation:

* [Webpack homepage](https://webpack.js.org/)
