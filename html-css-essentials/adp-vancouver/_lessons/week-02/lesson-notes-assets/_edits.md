# Lesson Edits
----

## Day 1

## Day 2

Add more about "reduce" with practice.

Add basics about "partial application" and "currying". This will be helpful in understanding middleware the next day.

## Day 3

Remove "localStorage" example as too complicated. Replace it with "redux-devtools" - also challenging but doable.

Add section about "process.env.NODE_ENV !== 'production'" for loading redux-devtools and redux-logger.

## Day 4

Discussion about PostList & Post, which should be a container/presentational component.

Talk about creating a PostDetails component. Use a selector to grab the single post.

```js
function getPostById(posts, id) {
  return posts.find((post) => post.id === id)[0];
}

// note: create a currentPost key
const mapStateToProps = state => ({
  post: getPostById(state, state.currentPost.id); // selectors are more descriptive
});
```

```js
class PostDetails extends React.Component {
  componentWillUpdate() {
    this.props.post = getPostById(this.props.posts, this.params.postId);
  }
  render() {
    return <Post post={this.props.post} />
  }
}
```

## Day 5

## Project Notes

## Miscellaneous
