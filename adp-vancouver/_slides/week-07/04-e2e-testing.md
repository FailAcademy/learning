---
layout: slidedeck
title: E2E Testing Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# E2E Testing

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. run a selenium server
2. setup and run NightWatch
3. write tests
4. write more amazing tests
5. write tests better

---
class: middle, center

# Why E2E Test?

![Unit Test Gif](http://67.media.tumblr.com/3d4c0c08b7ee1787b4cf229251632da9/tumblr_inline_no7oigASv41raprkq_500.gif)

> All unit tests passed!

---

# Why E2E Test?

Just because all the pieces work on their own, doesn't mean they all work together.

E2E testing is like creating a bot that checks your app, and makes sure everything is working.

---
template: inverse

# [NightWatch Setup](http://nightwatchjs.org)

---

# Disclaimer

NightWatch has a lot of setup. But once setup, it's easy to run and fun to use.

Be patient!

---

# Install NightWatch

Nightwatch requires Webdriver & Selenium.

```bash
npm install -g nightwatch

npm install -g webdriver-manager

brew doctor
brew update
brew install selenium-server-standalone
```

---

### Selenium

[Selenium](http://www.seleniumhq.org/) is a browser automation tool.

### WebDriver

Selenium [WebDriver](http://www.seleniumhq.org/projects/webdriver/) gives you an API to do things in an automated browser.

---

# Setup NightWatch

Copy the [configuration file](http://nightwatchjs.org/guide) from the getting started guide on NightWatch.

Change the "src_folders" to point to "e2e".

/e2e/nightwatch.json

```json
{
  "src_folders" : ["e2e"],
}
```

---

# NightWatch + Babel

Install a plugin to use ES2015 with NightWatch.

```shell
npm i babel-plugin-add-module-exports --save-dev
```

Specify your configuration in ".babelrc"

.babelrc

```
{
  presets: ["es2015"],
  plugins: ["add-module-exports"]
}
```

---

# NightWatch Config

Create a "nightwatch.conf" in your root directory. 
This will enable babel before starting NightWatch.

/nightwatch.conf.js

```js
require('babel-core/register');

module.exports = require('./e2e/nightwatch.json');
```  

---

# Directory Structure

Your directory structure should now look like below:

```
e2e
  |- nightwatch.json
  |- main.js
package.json
nightwatch.conf.js
```

---
template: inverse

# Running NightWatch

---

# Running E2E Tests

Nightwatch requires three different processes running at the same time.

1. run your app
2. run a selenium server
3. run nightwatch

---

# E2E NPM Scripts

We can combine the first 2 steps into a single step, using [concurrently](https://github.com/kimmobrunfeldt/concurrently).

Install concurrently.

```shell
npm install -g concurrently
```

Add scripts. 

/ package.json

```json
"scripts": {
  "e2e-setup": "concurrently 'npm start' 'webdriver-manager start'",
  "e2e": "nightwatch"
}
```

---

# Run Tests

Run the setup.

```shell
npm run e2e-setup
```

Switch to a new command line window and run the tests.

```shell
npm run e2e
```

---
template: inverse

# NightWatch Browser Tests

---

# First Test

Open a browser.

/e2e/demo.js

```js
module.exports = {
  'Demo test' : (browser) => {
    browser
      .url('http://www.google.com')
  }
};
```

---

# Second Test

Open a browser and do something.

/e2e/demo.js

```js
module.exports = {
  'Demo test' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
  }
};
```

---

# Third Test

Open a browser, do something, expect something, end.

```js
module.exports = {
  'Demo test' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end(); // close the browser
  }
};
```

---

# browser.end()

Don't forget to close the window when your test has finished.

---
template: inverse

# NightWatch Locally

---

# First Real Test

Test that your "Worst Pokemon" app loads.

/e2e/main.js

```js
const url = 'http://localhost:3000';

module.exports = {
  'Loads page with title': (browser) => {
    browser
      .url(url)
      .waitForElementVisible('body', 1000)
      .assert.containsText('h1', 'Worst Pokemon')
      .end();
  }
};
```

---

# Second Test

Test that a list of exactly 3 pokemon load.

/e2e/main.js

```js
{
 'Loads list of pokemon': (browser) => {
    browser
      .url(url)
      .waitForElementVisible('ol', 1000)
      .elements('tag name', 'li', (result) => {
        browser.assert.equal(result.value.length, 3)
      })
      .end();
  }
}
```

---

# Third Test

Test if the first button has an initial value of 2.

/e2e/main.js

```js
'Votes item up once on click': (browser) => {
    browser
      .url(url)
      .waitForElementVisible('ol', 1000)
      .assert.containsText('.btn', '2')
      .end();
}
```

---

# Third Test

Test if clicking on the button changes the value to 3.

/e2e/main.js

```js
'Votes item up once on click': (browser) => {
    browser
      .url(url)
      .waitForElementVisible('ol', 1000)
      .assert.containsText('.btn', '2')
      .click('.btn')
      .assert.containsText('.btn', '3')
      .end();
}
```

---

# Third Test

Test if clicking on the button again doesn't change the value.

/e2e/main.js

```js
'Votes item up once on click': (browser) => {
    browser
      .url(url)
      .waitForElementVisible('ol', 1000)
      .assert.containsText('.btn', '2')
      .click('.btn')
      .assert.containsText('.btn', '3')
      .click('.btn')
      .assert.containsText('.btn', '3')
      .end();
```

---
template: inverse

# NightWatch Snapshot Testing

---

# Snapshot

Why might we want to take a screenshot of our app?

---

# Snapshot Error Testing

Show a snapshot when your test fails.

/e2e/nightwatch.json

```json
 "test_settings" : {
    "default" : {
      "screenshots" : {
        "enabled" : true,
        "on_failure" : true,
        "on_error" : false,
        "path" : "e2e/screenshots/fail",
      },
```

---

# Snapshot ViewPort

Specify widths for the browser.

Also specify where you want pictures to be saved.

/e2e/main.js

```js
const viewport_widths = [240, 320, 360, 568, 603, 640, 768, 800, 960, 1024, 1280, 1400, 1600, 1920];
const imageDir = name => __dirname + '/screenshots/sizes/' + name + '.png';
```

---

# Snapshot ViewPort

Take pictures at each different viewport width.

```js
'Take photos': (browser) => {
    browser
      .url(url)
      .waitForElementVisible('body', 1000);

    viewport_widths.forEach(width => {
      browser
        .resizeWindow(width, 300)
        .saveScreenshot(imageDir(`page-${width}`));
    });
    
    browser.end();
  }
```

---

template: inverse

# NightWatch: Multiple Browsers

---

# Multiple Browsers

Why might we want to test different browsers?

---

# Multiple Browsers

Add a browser to "test_settings" in "nightwatch.json".

/e2e/nightwatch.json

```json
"firefox" : {
  "desiredCapabilities": {
    "browserName": "firefox",
    "javascriptEnabled": true,
    "acceptSslCerts": true
  }
}
```

---

# Browser Drivers

You *may* or *may not* have to add a link to the browser driver for selenium.

/e2e/nightwatch.json

```json
"selenium" : {
    "cli_args" : {
      "webdriver.chrome.driver" : "",
      "webdriver.firefox.driver": "path/to/driver",
      "webdriver.safari.driver": ""
    }
  }
```

---

# MultiBrowser Script

In your "package.json" create a script to run multiple browser tests.

/package.json

```json
"scripts": {
  "e2e-all": "nightwatch -e chrome,firefox"
}
```

*Note: Safari requires an app developer account.*

---

# MultiBrowser Snapshot

We should now also adjust our snapshot code.

```js
// gets browser name
const browserName = browser.options.desiredCapabilities.browserName;    

viewport_widths.forEach(width => {
  browser
    .resizeWindow(width, 300)
    // saves with browser name
    .saveScreenshot(imageDir(`page-${browserName}-${width}`));
});
```

---
template: inverse

# Page Objects

---

# Page Objects

Configure [page objects](https://github.com/nightwatchjs/nightwatch-docs/blob/master/guide/working-with-page-objects/using-page-objects.md)

/e2e/nightwatch.json

```js
{
  "page_objects_path": "e2e/pages/"
}
```

---

# Directory Structure

Your directory structure should now look like below:

```
e2e
  |- nightwatch.json
  |- main.js
  |- screenshots
      |- image.png
  |- pages
      |- main.js 
package.json
nightwatch.conf.js
```

---

# Page Object Example

Specify a "url", "widths", and the "elements" on your page.

/e2e/pages/main.js

```js
module.exports = {  
  url: 'http://localhost:3000',
  widths: [800],
  elements: {
    title: 'h1',
    pokemonList: 'ol',
    pokemon: 'li',
    vote: '.btn',
  }
};
```

---

# Calling Page Objects

We call a page object with `browser.page.FILE_NAME()`.

This calls the url at the widths specified.

We can then reference elements using "@ELEMENT_NAME".
  

---

# Calling Page Objects

/e2e/main.js

```js
'Loads page with title': (browser) => {
  // before
  // browser
  //   .url('http://localhost:3000')
  //   .waitForElementVisible('body', 1000)
  //   .assert.containsText('h1', 'Worst Pokemon')
  //   .end();


  // with page objects
  let main = browser.page.main();

  main
    .navigate()
    .waitForElementVisible('body', 1000)
    .assert.containsText('@title', 'Worst Pokemon');

  browser.end();
}
```

---

# Example 2

/e2e/main.js

```js
'Votes item up once on click': (browser) => {

    let main = browser.page.main();

    main
      .navigate()
      .waitForElementVisible('@pokemonList', 1000)
      .assert.containsText('@vote', '2')
      .click('@vote')
      .assert.containsText('@vote', '3')
      .click('@vote')
      .assert.containsText('@vote', '3');
      
    browser.end();
  }
```

---

## Challenge

Try writing two more NightWatch tests for the "Worst Pokemon" app.


{% endhighlight %}

