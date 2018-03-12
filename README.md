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
![](/images/initial_state.png)

#### End:
![](/images/end_state.png)

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

There are 3 problem sets: [Part I](/part1.md), [Part II](/part2.md), [PART III](/part3.js).

Try your best before looking at the [/solutions](/solutions). The name of the solution file will match the title of the problem. For example, the solution to **turn_3rd_cell_blue** is at [solutions/turn_3rd_cell_blue.js](solutions/turn_3rd_cell_blue.js).

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

* First, manually configure your "starting row" to match the initial state of the problem you're solving.
    - `var initial_state = ['.', 'b', '.', 'g', '.']`
        + 'b' means blue
        + 'g' mean green
        + '.' (dot) means empty
* Next, write your instructions inside the `main` function in [play.js].
* To run the program, open `index.html` in your browser and press "Play". This will execute the code you put in your `main` function.
    * TIP: Refresh the page whenever you make changes to your JavaScript!
    * PRO-TIP: Always have your Chrome Developer Console open (`Cmd` + `Opt` + `i`), and check for error messages!

* When you've completed a problem, save your work! Create a file that matches your problem name, e.g. `all-blue.js`, and copy-paste your `play.js` into that new file. Then, go back to `play.js` and clear out your `main` function, so you can start fresh again.

#### Inspiration
Adapted from [Kyrel](https://github.com/kyletns/kyrel).

Slides:
[PDF](Kyrel.pdf) or [Google Slides](https://docs.google.com/presentation/d/1j47BMDfows4O5rw4UYaYabHhosmZHQ8iKs8A5b-T3Pw/edit?usp=sharing)
