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

var initial_state = ['b', 'g', 'g', '.', 'g'];

/*bleed_right - solution and advanced solution
start: ['.', '.', 'b', '.', '.']
finish: ['.', '.', 'b', 'b', 'b']

invert_colors - solution
start: ['b', 'g', 'g', 'b', 'b']

finish: ['g', 'b', 'b', 'g', 'g']

start: ['b', '.', 'g', '.', 'b']

finish: ['g', '.', 'b', '.', 'g']

pull_blues_right - solution
start: ['b', '.', 'b', '.', '.']
finish: ['.', '.', '.', 'b', 'b']

pull_blues_left - solution
start: [ '.', 'b', 'b', '.', 'b' ]
finish: [ 'b', 'b', 'b', '.', '.' ]

reverse_row - solution
start: ['b', 'g', 'g', '.', 'g']
finish: ['g', '.', 'g', 'g', 'b']*/

function main(){

  let workArray = [];

  for (let i = initial_state.length-1;i>=0; i--) {
    workArray.push(initial_state[i]);
    }

  workArray.forEach(function(color) {
    if (color === 'b') {
      useBlue();
      draw();
    } else if (color === 'g') {
      useGreen();
      draw();
    } else {
      erase();
    }
    moveRight();
  })









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
