---
layout: lesson
title: Asynchronous JavaScript Lab
lesson_date: 2019-04-15
---

## Lab Activity

Save these three files to your local filesystem:

```
# opening.txt
From time to time
```

```
# middle.txt
The clouds give rest
```

```
# end.txt
To the moon-beholders
```

Write a function that uses Node to get each of the files and concatenate them into a haiku. Maintain the appropriate line breaks.

- There are sync and async versions of the Node API function you will need - use the async version
- To get the executing path of your node process, use `process.cwd()`

Result:

```
From time to time
The clouds give rest
To the moon-beholders
```

If you finish, here are some additional challenges:

1.  Write the function using Async/Await and Promises
2.  Using Promises, find a way to request all three files concurrently
3.  Using Promises, find a way to request all three concurrently along with a file that does not exist. (Hint: there is no Promise API method that allows for this)
