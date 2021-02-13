let playerSelection;
let numb;
let playerWins = 0;
let computerWins = 0;
let computerSelection = ''

fiveRounds(game);







function computerPlay() {
        random();
    if (numb === 0) {
              computerSelection = 'rock'
                console.log(computerSelection)
                return computerSelection = 'rock'}

        else if (numb === 1) {
              computerSelection = 'paper'
              console.log(computerSelection)
                return computerSelection = 'paper'}
         
        else if (numb === 2) {
            computerSelection = 'scissors'
            console.log(computerSelection)
            return computerSelection = 'scissors'}
}

function random(){
        numb = Math.round(Math.random() * 2);
        return numb;
        }
    
        

   

            
        
    


   function game(playerSelection, computerSelection) {
                playerSelection = prompt("Rock, paper or scissors?")
                playerSelection = playerSelection.toLowerCase();
                
           computerSelection = computerPlay();
        if (playerSelection === 'rock' && computerSelection === 'scissors') {
                console.log('Player wins!');
                 playerWins ++;
                 return 'Player wins!';
                }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
                console.log('Player wins!');
                playerWins ++;
                 return 'Player wins!';
                
                }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                console.log('Player wins!');
                playerWins ++;
                 return 'Player wins!';
                }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                    console.log('Computer wins!');
                    computerWins ++;
                 return 'Computer wins!';
                    }
        else if (playerSelection === 'rock' && computerSelection === 'paper') {
                    console.log('Computer wins!');
                    computerWins ++;
                    return 'Computer wins!';
                    }
        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                    console.log('Computer wins!');
                    computerWins ++;
                 return 'Computer wins!';
                    }
        else if (playerSelection === 'rock' && computerSelection === 'rock') {
                    console.log('Tie!');
                    return 'Tie!';
                    }
        else if (playerSelection === 'paper' && computerSelection === 'paper') {
                    console.log('Tie!');
                    return 'Tie!';
                    }
        else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
                    console.log('Tie!');
                    return 'Tie!';
                    }
                }
                
        function fiveRounds (game) {
                game(playerSelection, computerSelection);
                game(playerSelection, computerSelection);
                game(playerSelection, computerSelection);
                game(playerSelection, computerSelection);
                game(playerSelection, computerSelection);

                if (playerWins === computerWins) {
                alert(`After five games the result is a tie of ${playerWins} and ${computerWins}.`)
                return 'Tie'}
                if (playerWins > computerWins) {
                        alert(`After five games the result is a player victory by ${playerWins} to ${computerWins}.`)
                        return 'Player Wins'}
                        if (playerWins < computerWins) {
                                alert(`After five games the result is a computer victory by ${computerWins} to ${playerWins}.`)
                                return 'Computer Wins'}
        }
