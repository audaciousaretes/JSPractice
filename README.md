# jspractice

## Installation

- Fork project via github.com
- Clone your forked remote into your `workspace`
- `cd` into the new `jspractice` directory

## Homework

Open `p1-foreach.js` and write code in the `// YOUR CODE HERE` section. For each homework assignment, you should have a passing solution before moving on to the next assigment.

When you have a passing solution, `add`, `commit` and `push` your changes to your remote and ping me on Slack.

Do all homework in the order of `p1`, `p2`, `p3`, etc.

## Testing Your Code

To test your solution, in your _terminal_ console run:

```
npm run test:p1
```

If your solution fails, you'll get output that looks like this:

```
> jspractice@1.0.0 test:p1 <yourpath>/JSPractice
> node practice/p1-foreach.js || true


assert.js:86
  throw new assert.AssertionError({
        ^
AssertionError: false == true
    at Console.assert (console.js:106:23)
    at Object.<anonymous> (<yourpath>/JSPractice/practice/p1-foreach.js:18:9)
    at Module._compile (module.js:460:26)
    at Object.Module._extensions..js (module.js:478:10)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12)
    at Function.Module.runMain (module.js:501:10)
    at startup (node.
```

If your solution passes, you'll get output that looks like this:

```
> jspractice@1.0.0 test:p1 <yourpath>/JSPractice
> node practice/p1-foreach.js || true
```
