# Kyrel
Kyrel is a simple browser-based game for learning about control flow and loops in javascript.

### Example Problem
This codebase contains the following methods for traversing / transforming the row:
* `moveRight();`
* `moveLeft();`
* `useGreen();`
* `useBlue();`
* `draw();`
* `erase();`
* `onGreen();`
* `onBlue();`

#### Start:
![](/images/initial_state.png)

Write a program which draws a green circle at the end of the row.

#### End:
![](/images/end_state.png)

``` javascript
  function main() {
    moveRight();
    moveRight();
    moveRight();
    moveRight();
    useGreen();
    draw();
  }
```

## Instructions

`git clone` this repo (you now know how to do this!).

There are 3 problem sets: 
* [Part I](/instructions/part1.md)
* [Part II](/instructions/part2.md)
* [Part III](/instructions/part3.js)

You will write your code in `play.js`:

``` js
var initial_state = [ '.', '.', '.', '.', '.' ];

function main(n) {

  //////////////////////////////////
  ////                          ////
  //// v YOUR CODE BELOW HERE v ////
  ////                          ////
  //////////////////////////////////



  //////////////////////////////////
  ////                          ////
  //// ^ YOUR CODE ABOVE HERE ^ ////
  ////                          ////
  //////////////////////////////////

}
```

* First, manually configure your `initial_state` to match the start state of the problem you're solving
    - `var initial_state = ['.', 'b', '.', 'g', '.']`
        + 'b' means blue
        + 'g' mean green
        + '.' (dot) means empty
* Next, use the methods available to you (e.g. `moveRight()`, `moveLeft()`, etc.) inside the `main` function to get the problem's finish state
* To execute your code in the `main` function, open `index.html` in your browser and press "Play"
    * Refresh the page whenever you make changes to your JavaScript
    * Always have your Chrome Developer Console open (`Cmd` + `Opt` + `i`) to check for error messages

* When you've completed a problem, save your work! Create a file that matches your problem name, e.g. `all-blue.js`, and copy-paste your `play.js` into that new file. Then, go back to `play.js` and clear out your `main` function, so you can start fresh again.

#### Inspiration
Adapted from [Kyrel](https://github.com/kyletns/kyrel).

[Slides](https://docs.google.com/presentation/d/1j47BMDfows4O5rw4UYaYabHhosmZHQ8iKs8A5b-T3Pw/edit?usp=sharing)
