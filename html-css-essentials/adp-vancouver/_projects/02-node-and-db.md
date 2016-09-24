---
layout: project
title: Project 1 / Part 2 - REDit
due: Week 5 (beginning of class)
---

Continue your Product Hunt / Reddit clone. Your project should have a user login, and allow users to create new posts.

Your project must include the following:
* Server ( *Node / Express* )
* Connected Database ( *PostgreSQL* )
* Connected Client ( *React* )
* Form with submit and data validation ( *Redux-Form* )

## Requirements

### Common
- [ ] project pushed to Github
- [ ] contains "README.md" with project summary and setup
- [ ] contains [valid "package.json"](https://browsenpm.org/package.json) fields filled out
- [ ] contains ".gitignore" file ignoring "node_modules"
- [ ] contains this self-evaluated spec checklist renamed "specs.md"
- [ ] [descriptive Git commits](http://chris.beams.io/posts/git-commit/)
- [ ] small, single purpose Git commits
- [X] setup ESLint using the [AirBnB style-guide](https://github.com/airbnb/javascript)
- [X] project runs with `npm start`
- [X] files compiled into a hidden ".build" directory

### Functional
- [ ] login: form with email and password
- [ ] login: persists on page reload
- [ ] login: logout button
- [ ] post: logged in users can create posts
- [ ] post: require a title & description
- [ ] post: optional url linking to content
- [ ] post: select a category
- [ ] data: new posts and votes persist after page reload
- [ ] form: provides error feedback on invalid input
- [ ] form: disabled submit button when form is invalid

### Development
- [ ] client: form validation
- [ ] client: JSON Web Tokens
- [ ] server: use ES2015 Promises when communicating between client and server
- [ ] server: use Passport to authenticate user logins and passwords
- [ ] server: sanitization of data
- [ ] server: data validation using schema
- [ ] server: sessions
- [ ] server: make database queries
- [ ] server: save state to database

### Quality
- [ ] organized file tree separating client and server code
- [ ] no lint errors from ESLint

### Stretch Goals
- [ ] login: display user [gravatar](https://en.gravatar.com/)
- [ ] post: allow users to create new categories
- [ ] post: provide users feedback on invalid input data
- [ ] client: reload page state from [save state to localStorage](https://github.com/elgerlambert/redux-localstorage)
- [ ] server: setup OAuth2 login for Github, Twitter and/or Facebook
