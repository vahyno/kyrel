# Kyrel
Kyrel is a simple browser-based game for learning about control flow and loops in javascript.

### Example Problem
Write a program which draws a green circle at the end of the row.

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

This would result in the following transformation:
```
 ['.', '.', '.', '.', '.'] // start row (initial state)
 ['.', '.', '.', '.', 'g'] // end row (end state)
```

#### Start:
![](/screenshots/initial_state.png)

#### End:
![](/screenshots/end_state.png)

### Methods
This codebase contains the following methods for traversing / transforming the row:
* `moveRight();`
* `moveLeft();`
* `useGreen();`
* `useBlue();`
* `draw();`
* `erase();`
* `onGreen();`
* `onBlue();`

## Instructions

`git clone` this repo (you now know how to do this!).

There are 3 problem sets: [Part I](/challenges/day1.md), [Part II](/challenges/day2.md), [PART III](/challenges/day3.js).

Try your best before looking at the [/solutions](/challenges/solutions). The name of the solution file will match the title of the problem. For example, the solution to **turn_3rd_cell_blue** is at [challenges/solutions/turn_3rd_cell_blue.js](challenges/solutions/turn_3rd_cell_blue.js).

### Using kyrel.js

If you look in `play.js` you'll see this:

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

* First, manually configure your "starting row" (see `play.js#L22`) to match the initial state of the problem you're solving.
    - `var initial_state = ['.', 'b', '.', 'g', '.'] // play.js#L22`
        + 'b' means blue
        + 'g' mean green
        + '.' (dot) means empty
* Next, write your instructions inside the `main` function in [play.js](/play.js#L24).
    * TIP: If you declare your variables at the very TOP of the play.js file, your values will be in the "global scope". This can make it easier for you to see them in your console / play with them.
* To run the program, open `index.html` in your browser and press "Play". This will execute the code you put in your `main` function in `play.js#L24`.
    * TIP: Make sure to refresh the page whenever you make changes to your javascript!
    * PRO-TIP: Always have your Chrome Developer Console open (`Cmd` + `Opt` + `i`), and make sure to check for error messages!

* When you've completed a problem, save your work! Make a copy of `play.js` and rename it e.g. `solution-all-blue.js`. Then, go back to `play.js` and clear out your `main` function so you can start fresh again.

#### Inspiration
Adapted from [Kyrel](https://github.com/kyletns/kyrel).

Possible slides:
[Kyrel.pdf](Kyrel.pdf)
or [Google Presentations](https://docs.google.com/presentation/d/1j47BMDfows4O5rw4UYaYabHhosmZHQ8iKs8A5b-T3Pw/edit?usp=sharing)
