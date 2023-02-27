let firstPlayerName = prompt('Enter first player name');
let secondPlayerName = prompt('Enter second player name');

document.querySelector('.player1 span').innerText = firstPlayerName == undefined ? 'Player 1:' : firstPlayerName + ':';
document.querySelector('.player2 span').innerText = secondPlayerName == undefined ? 'Player 2:' : secondPlayerName + ':';

// Reset button
document.querySelector('.reset').addEventListener('click', reset);

// Reload button for new game
document.querySelector('.reload').addEventListener('click', () => {
    location.reload();
});

// Players' scores
let firstPlayerScore = document.getElementById('score1');
let secondPlayerScore = document.getElementById('score2');