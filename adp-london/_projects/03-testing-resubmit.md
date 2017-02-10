---
layout: project
title: Project 3 - Code Quality Improvements
due: Monday, February 27th (beginning of class)
class: gh-check
---

You will refactor your REDit project and resubmit it using unit and E2E tests.

Your project must include type-checking with TypeScript, unit tests with Jest and Enzyme, and E2E testing with NightWatch.

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
- [ ] Use ESLint with the [AirBnB style-guide](https://github.com/airbnb/javascript)

### Development

Your project must:

- [ ] Contain files renamed as `.ts` or `.tsx`
- [ ] Implement a TypeScript setup with React and Webpack
- [ ] Include a shortcut for test watcher and code coverage as an NPM script
- [ ] Include a shortcut to run E2E tests as an NPM script

### Quality

Your project must:

- [ ] Configure TSLint with JSX options turned on
- [ ] Generate under ten TSLint warnings
- [ ] Specify types with TypeScript
- [ ] Use TypeScript interfaces for data structures
- [ ] Use TypeScript to load type definition libraries
- [ ] Generate under fifteen TypeScript compiler warnings
- [ ] Contain unit tests:
   - For Redux reducers
   - That include a spy
   - That include a mock
- [ ] Have over 35% unit test coverage
- [ ] Snapshot-test six components (Jest)
- [ ] Test prop rendering of components (Enzyme)
- [ ] Test three or more DOM interactions (Enzyme)
- [ ] Implement E2E tests that:
   - Test a simple page load scenario
   - Test page routing
   - Test form fill in and submit
   - Take screenshots when tests fail
- [ ] Document code comments for easy readability

### Stretch Goals

Want to challenge yourself? Your project could also:

- [ ] Generate zero TSLint warnings
- [ ] Generate zero TypeScript compiler warnings
- [ ] Have over 75% unit test coverage
- [ ] E2E test six or more user scenarios
- [ ] Use E2E testing to take photos of homepage at five or more different sizes
- [ ] Use E2E testing to run tests on multiple browsers
- [ ] Implement [React Cards](https://github.com/steos/reactcards) for three or more components

## Submission Instructions

When you’re ready to submit your project, **please email a link to your GitHub repository containing your project** to mackenzie@redacademy.com.
