---
layout: lesson
title: React State and Events II
slides: ['_slides/month-04/02-state-events-II.md']
lesson_date: 2019-09-05
---

## Pre-work

Prior to class, read through the following documentation:

- [Apollo Client Docs (Intro and Essentials sections)](https://www.apollographql.com/docs/react/)

---

## Learning Objectives

- Explain the special role of each "lifecycle method" in a React component.
- Explain the difference between container components and presentational components.
- Use the `ref` attribute to reference DOM elements after a component is rendered.
- Add Apollo Client to a React application to fetch data from a GraphQL API.

---

## Keywords

- Synthetic events
- Ref
- Component lifecycle methods

---

## Exercise 1

Now add a `hasCompleted` method to the `App` component to conditionally display the "Clear completed" button.

**Hint:** You're going to need to use `.filter()` again to determine if there are any to-do items in the `todos` array that have `complete` set to `true`, and conditionally display the button based on the length of that filtered array.

How can you use this new method to conditionally render the `ClearButton` component in the `App` component now?

**Note:** The `hasCompleted` method isn't an event handler, so it doesn't need to be bound in the constructor (or elsewhere).

---

## Exercise 2

Now add a `removeCompleted` method to the `App` component to make your "Clear completed" button work.

**Hint** You're going to need to use `.filter()` to keep the todos that are not completed and update your state. Don't forget to pass your method as a prop to your child component.

---

## Exercise 3

Last but not least, we want to improve the UX of our to-do app and automatically focus the `<input>` element when the app is rendered.

To do that, we'll need to use one of React's lifecycle methods. It's up to you to pick the right one and implement the code within it to focus the `<input>`.

---

## Lab Activity (Next Class)

### Task 1:

In `client/src/apollo/queries.js`:

- Create the `ItemFields` [**fragment**](https://www.apollographql.com/docs/angular/features/fragments.html)
- Use that fragment to create the `ALL_ITEMS_QUERY`

### Create a Container

Use a more advanced pattern with `<Query>` in `client/src/pages/Items/ItemsContainer.js`.

```js
class ItemsContainer extends Component {
  render() {
    return (
      <Query query={ALL_ITEMS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <FullScreenLoader inverted />;
          if (error) return <p>{`Error! ${error.message}`}</p>;
          return <Items classes={this.props.classes} items={data.items} />;
        }}
      </Query>
    );
  }
}

export default withStyles(styles)(ItemsContainer);
```

**Challenge:** Create a custom Error component instead of using a `<p>` tag.

### Task 2:

Continue working on the client side of your Boomtown application now that you are able to load data from your server in it.

Use the new container pattern that we learned today to make API calls to your GraphQL server using `<Query />` component to load data in your pages.

**Tip!** In addition to the Material UI components, **[react-gravatar](https://github.com/KyleAMathews/react-gravatar)** to load user profile images based on their email addresses. This package is already installed in the Boomtown Stater&mdash;you simply need to read its docs and use it.

---

## Additional Resources

The Apollo Client docs for React:

- [Apollo Client - React & React Native](https://www.apollographql.com/docs/react/)

More on the "render props" pattern used by Apollo Client:

- [React Docs - Render Props](https://reactjs.org/docs/render-props.html)
- [Tutorial: Render Props in React Apollo 2.1](https://www.prisma.io/blog/tutorial-render-props-in-react-apollo-2-1-199e9e2bd01e/)
