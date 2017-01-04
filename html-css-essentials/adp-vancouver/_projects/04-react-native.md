---
layout: project
title: Project 4 - r10
due: Monday, March 6th (beginning of class)
class: gh-check
---

Build a mobile conference schedule application using React Native.

Your project must be cross-platform (iOS/Android) and contain a database (Realm).

You can [download the project assets here](**TBA**).

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

### Functional

Your project must:

- [ ] Display a loading indicator when data is being fetched

### Development

Your project must:

- [ ] Contain components built using valid JSX
- [ ] Use ES2015 `import` and `export`
- [ ] Contain components created using `React.Component`, `const`, or `function` only
- [ ] Implement "presentational" and "container" components appropriately throughout the application
- [ ] Make appropriate use of React Native's UI components (including `<View>`, `<Text>`, `<Image>`, `<ListView>`, `<TouchableHighlight>`, etc.)
- [ ] Implement styles on a per-component basis using `Stylesheet.Create`
- [ ] Leverage code-reuse strategies across iOS and Android platforms as much as possible
- [ ] Use [ExNavigation](https://github.com/wix/react-native-navigation) to implement a navigator (iOS/Android), tab bar (iOS only), and drawer (Android only) for scene navigation
- [ ] Use [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) for icon assets throughout the app (specifically, the Octicon library)
- [ ] Use [Realm React Native](https://realm.io/docs/react-native/latest/) as an embedded database

### Stretch Goals

Want to challenge yourself? Your project could also:

**Improve code efficiency and quality:**

- [ ] Include Redux for state management in the app
- [ ] Use Flow for static typechecking in the app

**Enhance UX:**

- [ ] Cache requests made to the Unsplash API (to improve performance and reduce the likelihood of hitting the Unsplash API rate limit)
- [ ] Use React Native's `Animated` and `PanResponder` to build out custom animation that allows a user to swipe left to load a new random photo in the Random scene
- [ ] Add the ability to dynamically append additional results wherever the Unsplash API permits pagination (consider exploring an enhanced, third-party listview component for this)

## Submission Instructions

When you’re ready to submit your project, **please email a link to your GitHub repository containing your project** to mandi@redacademy.com.
