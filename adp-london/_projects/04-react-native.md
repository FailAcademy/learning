---
layout: project
title: Project 4 - Splashify
due: Monday, November 21st (beginning of class)
class: gh-check
---

Build a mobile application using React Native that accesses the Unsplash API to allow users to view recently posted photos, search for photos, and store their favourite photos in a database.

Your project must be cross-platform (iOS/Android) and contain a database (Realm).

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

- [ ] Display a feed of the ten latest photos posted to Unsplash
- [ ] Display photos in a Lightbox scene when tapped
- [ ] Allow users to save an image to their camera roll from the Lightbox scene
- [ ] Display data about a photographer when an Unsplash username is tapped
- [ ] Allow users to search for photos using a text-based keyword
- [ ] Display a list of recent collections in the default Search scene by default
- [ ] Display a feed of the ten most popular collection photos in a Collection scene when a collection cover image is tapped from the Search scene
- [ ] Display fetched search results in a grid format
- [ ] Allow users to favourite and un-favourite photos from the Lightbox scene, and save references to those photos in a mobile database
- [ ] Display previously favourited photos in a Faves scene in a grid format, and in reverse chronological order (i.e. most recently saved first)
- [ ] Display a loading indicator when data is being fetched
- [ ] Contain About, Collection, Faves, Lightbox, Loading, Recent, Search, and User scenes 

### Development

Your project must:

- [ ] Contain components built using valid JSX
- [ ] Use ES2015 `import` and `export`
- [ ] Contain components created using `React.Component`, `const`, or `function` only
- [ ] Implement "presentational" and "container" components appropriately throughout the application
- [ ] Make appropriate use of React Native's UI components (including `<View>`, `<Text>`, `<Image>`, `<ListView>`, `<TouchableHighlight>`, etc.)
- [ ] Implement styles on a per-component basis using `Stylesheet.create`
- [ ] Use [React Native Navigation](https://github.com/wix/react-native-navigation) to implement a cross-platform navigator and tab bar for scene navigation
- [ ] Use [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) for icon assets throughout the app (specifically, the Octicon library)
- [ ] Use [Realm React Native](https://realm.io/docs/react-native/latest/) as a database

### Quality

Your project must:

- [ ] Contain an organized file tree separating stateless components from stateful scenes, as well as sub-directories for organizing files with configuration code reusable functions
- [ ] Be free of lint errors from ESLint

### Stretch Goals

Want to challenge yourself? Your project could also:

- [ ] Include a Random scene that randomly displays a photos, and allows a user to swipe the screen to load another
- [ ] Add the ability to dynamically append additional results wherever the Unsplash API permits pagination (latest photos, search results, etc.)

## Submission Instructions

When you’re ready to submit your project, **please email a link to your GitHub repository containing your project** to mandi@redacademy.com.