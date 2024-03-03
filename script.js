'use strict';
console.log(document.querySelector('.message').textContent)

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let win = false;

//document.querySelector('.number').textContent = secretNumber;

// handle click event of the check button using addEventListener() function
// addEventListener() takes two arguments, the event type, and a function to perform at the event triggering

document.querySelector('.check').addEventListener('click', function() {
    console.log(document.querySelector('.guess').value)
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = 'Number cannot be empty 👎'
    // when guess is correct
    }else if(guess === secretNumber && !win) {
        document.querySelector('.message').textContent = 'Correct number 🎊'

        // change page color to green when player wins
        // the values set at DOM manipulation should always be strings
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;
        win = true;
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    // when guess is wrong
    }else if(guess !== secretNumber && !win) {
        if(score >= 1) {
            score--
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too high ⏫' : 'Too low ⏬';
        } else {
            document.querySelector('.message').textContent = 'You lost 😿'
        }
    }
    
    // else if(guess > secretNumber && !win) {
    //     if(score >= 1) {
    //         document.querySelector('.message').textContent = 'Too high ⏫'
    //         score--
    //         document.querySelector('.score').textContent = score
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost 😿'
    //     }
        
    // }else if(guess < secretNumber && !win) {
    //     if(score >= 1) {
    //         document.querySelector('.message').textContent = 'Too low ⏬'
    //         score--
    //         document.querySelector('.score').textContent = score
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost 😿'
    //     }
    // } 
    
    else if(win){
        document.querySelector('.message').textContent = 'Press Again button to play again'
    }
});

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.message').textContent = 'Start guessing...';
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    win = false;
})