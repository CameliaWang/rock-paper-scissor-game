let youScore = 0;
let computerScore = 0;
const youScore_span = document.getElementById('you-score');
const computerScores_pan = document.getElementById('computer-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.result > p')
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');


function getComputerResult(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
return 'Scissors';
}

function win(you, computer) {
youScore++;
    youScore_span.innerHTML = youScore;
        computerScores_pan.innerHTML = computerScore;
 result.innerHTML = convertToWord(you)  + ' beats ' + convertToWord(computer) + '. You win!';
}
function lose(you, computer) {
computerScore++;
    youScore_span.innerHTML = youScore;
        computerScores_pan.innerHTML = computerScore;
 result.innerHTML = convertToWord(you) + ' loses to ' + convertToWord(computer) + '. You lose!';

}
function draw(you, computer) {
 result.innerHTML = convertToWord(you) + ' equals ' + convertToWord(computer) + '. It\'s a draw!';
}

function game(youResult) {
const computerResult = getComputerResult();
    switch (youResult + computerResult) {
        case 'rs':
        case 'pr':
        case 'sp':
win(youResult, computerResult);
            break;     
        case 'rp':
        case 'ps':
        case 'sr':
lose(youResult, computerResult);            break;      
       case 'rr':
        case 'pp':
        case 'ss':
draw(youResult, computerResult);            break;
            
    }
}

game('c');

function main() {

rock.addEventListener('click', function(){
game('r');
                          })
paper.addEventListener('click', function(){
 game('p');
                          })
scissors.addEventListener('click', function(){
 game('s');
                          })
    }
main();









