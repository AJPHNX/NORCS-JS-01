

let userSelection = prompt("rock, paper or scissors?"); //Gets the users selection
let selectionArray = ['rock', 'paper','scissors']
let randNum = Math.ceil(Math.random()*3);//Randomly generate a number up to 3    
let computerSelection = selectionArray[randNum]
let winner = ''
//Conditional logic goes here to determine the computers selection

//<--Code goes here-->
//Function to compare the userSelection and the computerSelection to determine the winner
var compare=function(selection1,selection2){
    if (selection1 == 'rock'){
      switch(selection2){
        case 'rock':
            console.log ('Tie')
            winner = 'tie'
        break;
        case 'paper':
            console.log ('Computer Wins.')
            winner = 'computer'
        break;
        case 'scissors':
            console.log ('Person Wins.')
            winner = 'person'
        break;
      }
    }
  if (selection1 == 'paper'){
      switch(selection2){
        case 'rock':
            console.log ('Person Wins.')
            winner = 'person'
        break;
        case 'paper':
          console.log ('Tie')
           winner = 'tie'
        break;
        case 'scissors':
          console.log ('Computer Wins.')
          winner = 'computer'
        break;
      }
    }

  if (selection1 == 'scissors'){
      switch(selection2){
        case 'rock':
            console.log ('Computer Wins.')
            winner = 'computer'
        break;
        case 'paper':
            console.log ('Person Wins.')
            winner = 'person'
        break;
        case 'scissors':
          console.log ('Tie')
          winner = 'tie'
        break;
      }
    }
 // return winner
}
console.log (`Computer chose: ${computerSelection}`)
console.log(compare(userSelection,computerSelection)); //call the function to compare and display result
