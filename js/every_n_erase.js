/*
  INSTRUCTIONS
    - Write all of your code inside the `main` function below.
    - Use this file to build/test your programs.
    - To save your work, when you finish a challenge:
        - Make a copy of this file in this `js/` directory and name it e.g. `all-blue.js`
        - Clean out this `play.js` file so you can start fresh on a new challenge

  RESERVED WORDS (do not use as variable names)
      row, colors, kyrel, initial_state

  AVAILABLE METHODS
      moveRight(), moveLeft(),
      useGreen(), useBlue(), draw(), erase(),
      onGreen(), onBlue()

  You can also configure the initial state of the row using the following key:
    '.' => empty
    'b' => blue
    'g' => green
*/

var initial_state = ['b', 'b', 'b', 'b', 'b'];

/*every_n_erase - solution
start: ['b', 'b', 'b', 'b', 'b']
finish: ['.', '.', '.', '.', '.'] // (given n is 1)
finish: ['b', '.', 'b', '.', 'b'] // (given n is 2)
finish: ['b', 'b', 'b', 'b', '.'] // (given n is 5)*/

function main(){

  var n = 2

  for (let i = 0; i < initial_state.length; i++) {
    if ((i + 1) % n == 0) {
      erase();
    }
    moveRight();

  }







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

} // <--- be careful not to delete or comment-out this closing bracket!
