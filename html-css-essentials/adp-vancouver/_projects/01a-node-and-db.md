---
layout: project
title: Project 1 / Part 1 - Boomtown
due: Monday, July 16th (beginning of class)
class: gh-check
---

Create a back-end application to support a local sharing economy. The app must use PostgreSQL as a relational database to store shareable items and user info, Node.js/Express as its web server, and GraphQL for its client-facing API.

You can [download the starter repo here.](https://github.com/redacademy/boomtown-starter)

## Requirements

### Common

Your project must:

- [ ] Be pushed to Github
- [ ] Use [descriptive Git commits](http://chris.beams.io/posts/git-commit/)
- [ ] Use small, single purpose Git commits
- [ ] Contain `README.md` with project summary and setup
- [ ] Contain a valid [`package.json`](http://browsenpm.org/package.json) file with all appropriate fields completed
- [ ] Contain `.gitignore` file (ignoring `node_modules` and system files)
- [ ] Run without errors on `npm run start:dev`

### Functional

Your project must:

- [ ] Start without errors
- [ ] Be configured for development and production using `app.set` / `app.get`
- [ ] Connect to PostgreSQL using the `node-postgres` library
- [ ] Execute all of the required SQL queries using the `node-postgres` library
- [ ] Use Apollo Server to initialize a GraphQL server
- [ ] Define the necessary GraphQL schema
- [ ] Use GraphQL Explorer to save all the necessary queries and mutations required for the project
- [ ] Implement the necessary GraphQL resolvers
- [ ] Return the appropriate data from all required GraphQL queries and mutations

### Development

Your project must:

- [ ] Conform to the file/folder patterns established by the starter project

### Quality

Your project must:

- [ ] Be comprised of two repos separating client and server code (only server code required for this part)
- [ ] Be formatted with Prettier

### Stretch Goals

Want to challenge yourself? Your project could also:

- [ ] Implement full-text search using PostgreSQL

## Submission Instructions

When you’re ready to submit your project, **please email a link to your GitHub repository containing your project** to mackenzie@redacademy.com.
