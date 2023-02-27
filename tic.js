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


function button(row, place) {
    return document.querySelector(`.${row}>.${place}`);
}

// Buttons
// First row
let btn1 = button('first-row', 'c1');
let btn2 = button('first-row', 'c2');
let btn3 = button('first-row', 'c3');

// Second row
let btn4 = button('second-row', 'c1');
let btn5 = button('second-row', 'c2');
let btn6 = button('second-row', 'c3');

// Third row
let btn7 = button('third-row', 'c1');
let btn8 = button('third-row', 'c2');
let btn9 = button('third-row', 'c3');

let buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];

let counter = 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if (counter % 2 === 0) {
            buttons[i].innerHTML = 'X';
            buttons[i].style.fontSize = '8vw';
            buttons[i].style.color = 'red';
            buttons[i].style.backgroundColor = 'rgb(233, 208, 208)';
            console.log('Second player\'s turn');
            counter++;
        } else {
            buttons[i].innerHTML = 'O';
            buttons[i].style.fontSize = '8vw';
            buttons[i].style.color = 'blue';
            buttons[i].style.backgroundColor = 'rgb(208, 215, 233)';
            console.log('First player\'s turn');
            counter++;

        }

        buttons[i].style.cursor = 'default';
        buttons[i].style.pointerEvents = 'none';
        checkWinner();

    });
}

function showPopup(message) {
    let popup = document.getElementById('myPopup');
    popup.innerText = message;
    popup.classList.toggle('show');

    setTimeout(function () {
        popup.classList.remove('show');
    }, 3000);
}


firstPlayerName == undefined ? 'Player 1' : firstPlayerName;
secondPlayerName == undefined ? 'Player 2' : secondPlayerName;

function checkWinner() {
    if (btn1.innerHTML === 'X' && btn2.innerHTML === 'X' && btn3.innerHTML === 'X') {
        // alert('Player 1 wins!');
        showPopup(`${firstPlayerName} wins!`);
        firstPlayerScore.innerHTML = parseInt(firstPlayerScore.innerHTML) + 1;
        reset();
    } else if (btn1.innerHTML === 'O' && btn2.innerHTML === 'O' && btn3.innerHTML === 'O') {
        // alert('Player 2 wins!');
        showPopup(`${secondPlayerName} wins!`);
        secondPlayerScore.innerHTML = parseInt(secondPlayerScore.innerHTML) + 1;
        reset();
    } else if (btn4.innerHTML === 'X' && btn5.innerHTML === 'X' && btn6.innerHTML === 'X') {
        // alert('Player 1 wins!');
        showPopup(`${firstPlayerName} wins!`);
        firstPlayerScore.innerHTML = parseInt(firstPlayerScore.innerHTML) + 1;
        reset();
    } else if (btn4.innerHTML === 'O' && btn5.innerHTML === 'O' && btn6.innerHTML === 'O') {
        // alert('Player 2 wins!');
        showPopup(`${secondPlayerName} wins!`);
        secondPlayerScore.innerHTML = parseInt(secondPlayerScore.innerHTML) + 1;
        reset();
    } else if (btn7.innerHTML === 'X' && btn8.innerHTML === 'X' && btn9.innerHTML === 'X') {
        // alert('Player 1 wins!');
        showPopup(`${firstPlayerName} wins!`);
        firstPlayerScore.innerHTML = parseInt(firstPlayerScore.innerHTML) + 1;
        reset();
    } else if (btn7.innerHTML === 'O' && btn8.innerHTML === 'O' && btn9.innerHTML === 'O') {
        // alert('Player 2 wins!');
        showPopup(`${secondPlayerName} wins!`);
        secondPlayerScore.innerHTML = parseInt(secondPlayerScore.innerHTML) + 1;
        reset();
    } else if (btn1.innerHTML === 'X' && btn4.innerHTML === 'X' && btn7.innerHTML === 'X') {
        // alert('Player 1 wins!');
        showPopup(`${firstPlayerName} wins!`);
        firstPlayerScore.innerHTML = parseInt(firstPlayerScore.innerHTML) + 1;
        reset();
    } else if (btn1.innerHTML === 'O' && btn4.innerHTML === 'O' && btn7.innerHTML === 'O') {
        // alert('Player 2 wins!');
        showPopup(`${secondPlayerName} wins!`);
        secondPlayerScore.innerHTML = parseInt(secondPlayerScore.innerHTML) + 1;
        reset();
    } else if (btn2.innerHTML === 'X' && btn5.innerHTML === 'X' && btn8.innerHTML === 'X') {
        // alert('Player 1 wins!');
        showPopup(`${firstPlayerName} wins!`);
        firstPlayerScore.innerHTML = parseInt(firstPlayerScore.innerHTML) + 1;
        reset();
    } else if (btn2.innerHTML === 'O' && btn5.innerHTML === 'O' && btn8.innerHTML === 'O') {
        // alert('Player 2 wins!');
        showPopup(`${secondPlayerName} wins!`);
        secondPlayerScore.innerHTML = parseInt(secondPlayerScore.innerHTML) + 1;
        reset();
    } else if (btn3.innerHTML === 'X' && btn6.innerHTML === 'X' && btn9.innerHTML === 'X') {
        // alert('Player 1 wins!');
        showPopup(`${firstPlayerName} wins!`);
        firstPlayerScore.innerHTML = parseInt(firstPlayerScore.innerHTML) + 1;
        reset();
    } else if (btn3.innerHTML === 'O' && btn6.innerHTML === 'O' && btn9.innerHTML === 'O') {
        // alert('Player 2 wins!');
        showPopup(`${secondPlayerName} wins!`);
        secondPlayerScore.innerHTML = parseInt(secondPlayerScore.innerHTML) + 1;
        reset();
    } else if (btn1.innerHTML === 'X' && btn5.innerHTML === 'X' && btn9.innerHTML === 'X') {
        // alert('Player 1 wins!');
        showPopup(`${firstPlayerName} wins!`);
        firstPlayerScore.innerHTML = parseInt(firstPlayerScore.innerHTML) + 1;
        reset();
    } else if (btn1.innerHTML === 'O' && btn5.innerHTML === 'O' && btn9.innerHTML === 'O') {
        // alert('Player 2 wins!');
        showPopup(`${secondPlayerName} wins!`);
        secondPlayerScore.innerHTML = parseInt(secondPlayerScore.innerHTML) + 1;
        reset();
    } else if (btn3.innerHTML === 'X' && btn5.innerHTML === 'X' && btn7.innerHTML === 'X') {
        // alert('Player 1 wins!');
        showPopup(`${firstPlayerName} wins!`);
        firstPlayerScore.innerHTML = parseInt(firstPlayerScore.innerHTML) + 1;
        reset();
    } else if (btn3.innerHTML === 'O' && btn5.innerHTML === 'O' && btn7.innerHTML === 'O') {
        // alert('Player 2 wins!');
        showPopup(`${secondPlayerName} wins!`);
        secondPlayerScore.innerHTML = parseInt(secondPlayerScore.innerHTML) + 1;
        reset();
    } else if (counter === 9) {
        showPopup('Draw!');
        reset();
    }
}