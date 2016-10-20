---
layout: project
title: Project 1 / Part 2 - REDit
due: Monday, October 24th (beginning of class)
class: gh-check
---

Continue your Product Hunt / Reddit clone by adding the server-side components. Your project should have a user login, and allow users to create new posts.

Your project must include a server (Node/Express), a connected database (PostgreSQL), a connected client (React), and form with submit and data validation (Redux-Form), and user authentication.

## Requirements

### Common

Your project must:

- [ ] Be pushed to Github 
- [ ] Use [descriptive Git commits](http://chris.beams.io/posts/git-commit/)
- [ ] Use small, single purpose Git commits
- [ ] Contain `README.md` with project summary and setup
- [ ] Contain a valid [`package.json`](http://browsenpm.org/package.json) file with all appropriate fields completed
- [ ] Contain `.gitignore` file (ignoring `node_modules` and system files)
- [ ] Contain this self-evaluated spec checklist renamed `specs.md`
- [X] Use ESLint with the [AirBnB style-guide](https://github.com/airbnb/javascript)
- [X] Run without errors with `npm start`
- [X] Have appropriate files compiled into a `build` directory

### Functional

Your project must:

- [ ] Contain a login form allowing users to authenticate with email and password
- [ ] Persist logged in state on page reload
- [ ] Contain a functioning logout button
- [ ] Allow logged-in users to create posts
- [ ] Require that new posts contain both a title and a description
- [ ] Allow users to optionally supply a URL linking to the content
- [ ] Allow users to select a post category
- [ ] Persist new posts and up-votes after page reload
- [ ] Provide user feedback resulting from invalid input data
- [ ] Disable the submit button when data in form fields are invalid

### Development

Your project must:

- [ ] Implement form validation (client-side)
- [ ] Use JSON Web Tokens (client-side)
- [ ] Use ES2015 Promises when communicating between client and server (server-side)
- [ ] Use Passport to authenticate user logins and passwords (server-side)
- [ ] Sanitize data (server-side)
- [ ] Implement data validation using schema (server-side)
- [ ] Make efficient database queries (server-side)
- [ ] Save state to database (server-side)

### Quality

Your project must:

- [ ] Contain an organized file tree separating client and server code
- [ ] Be free of lint errors from ESLint

### Stretch Goals

Want to challenge yourself? Your project could also:

- [ ] Display user [Gravatar](https://en.gravatar.com/) when logged in
- [ ] Allow users to create new categories
- [ ] Reload page state from [save state to localStorage](https://github.com/elgerlambert/redux-localstorage)
- [ ] Setup OAuth2 login for GitHub, Twitter and/or Facebook

## Submission Instructions

When you’re ready to submit your project, **please email a link to your GitHub repository containing your project** to mackenzie@redacademy.com.
