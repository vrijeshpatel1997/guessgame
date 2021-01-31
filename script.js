'use strict';
/*

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Correct number ';

document.querySelector('.guess').value = 23;
*/


const secretnumber = Math.trunc(Math.random()*20)+1;
let  score = 20;



document.querySelector('.check').addEventListener('click', function(){


 const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

/// when there is no input
  if(!guess){

    document.querySelector('.message').textContent = 'No  number ';


  } else if (guess === secretnumber){

        
// when player wins
    document.querySelector('.message').textContent = 'Correct number ';


    document.querySelector('body').style.backgroundColor = '#60b347';


    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretnumber;
  //   too high
  } else if(guess > secretnumber){
   
    document.querySelector('.message').textContent = ' number  to high';
    score--;
    document.querySelector('.score').textContent = score;

    // too low
  } else if(guess < secretnumber){

    document.querySelector('.message').textContent = ' number  to  low ';
    score--;
    document.querySelector('.score').textContent = score;
  }
  document.querySelector('.enterdnum').textContent = guess;
 
  
});

document.querySelector('.again').addEventListener('click', function(){


document.querySelector('.score').textContent = 0;
document.querySelector('.number').textContent = 0;
document.querySelector('.message').textContent = "start gussing again";
document.querySelector('body').style.backgroundColor = '#e3ca29';


})



