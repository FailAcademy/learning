---

layout: slidedeck
title: Connecting Client & Server

---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Connecting Client & Server

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Fetch and what came before it
2. Wrapping a low-level API
3. Services
4. Human Friendly APIs

---
template: inverse

# Fetch

.large[
   and what came before it
]

---
## Fetch

- A promise-based API for fetching resources
- Handles JSON, text, images, streams, etc
- An evolution from XMLHttpRequest
- Somewhat confusing API (curried promises?)

---
class: middle

## Exercise: FetchJSON

Let's build a wrapper for fetch that we can use without knowing all of the low-level details.

Use the [Client API Service](https://github.com/redacademy/client-api-service) `master` branch as a seed.
Instructions are in the README.

Don't look now, but there's a finished version in the `fetch-json` branch for your reference.

---

template: inverse

# Services

---
class: middle

## Discuss

Where in our application do we put shared code?

---
class: middle

## Services

- One of the many ways to modularize code
- Allow us to create clean, business-driven interfaces that are easy to test
- Encapsulate the details of business logic
- Keep callers dumb!

---
class: middle

## Exercise: PostsApiService

Let's use our FetchJSON library to build a service that calls [this dummy API](https://jsonplaceholder.typicode.com).

The goal is to make our service have an API that describes _what_ we're trying to do, rather than _how_ we're doing it.

You can use the [Client API Service](https://github.com/redacademy/client-api-service) `fetch-json` branch as a seed.
Instructions are in the README.

---

{% endhighlight %}
