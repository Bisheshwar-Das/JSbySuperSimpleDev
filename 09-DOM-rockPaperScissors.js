const score= JSON.parse(localStorage.getItem('score')) || {
  wins:0,draws:0,losses:0
};

updateScore();
function pickWinner(userMove){
  const randomNumber=Math.random();
  let computerMove='';
  let result='';

  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock';
  } else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'paper';
  }else if(randomNumber >= 2/3 && randomNumber <1){
    computerMove = 'scissors';
  }

  if(userMove === computerMove){
    result="It's a Draw.";
  }else if(userMove === 'rock'){
    if(computerMove === 'paper'){
      result='You Lose.';
    }else if(computerMove === 'scissors'){
      result='You Win.';
    }
  }else if(userMove === 'paper'){
    if(computerMove === 'rock'){
      result='You Win.';
    }else if(computerMove === 'scissors'){
      result='You Lose.';
    }
  }else if(userMove === 'scissors'){
    if(computerMove === 'rock'){
      result='You Lose.';
    }else if(computerMove === 'paper'){
      result='You Win.';
    }
  }

  if(result==='You Win.'){
    score.wins++;
  }else if(result==='You Lose.'){
    score.losses++;
  }else{
    score.draws++;
  }

  localStorage.setItem('score',JSON.stringify(score));

  document.querySelector('.js-result').innerHTML=result;
  updateScore()
  document.querySelector('.js-move').
    innerHTML=`You
<img src="images/${userMove}-emoji.png" class="move-icons"> Computer
<img src="images/${computerMove}-emoji.png" class="move-icons">`;
  updateScore()
}

function updateScore(){document.querySelector('.js-score').innerHTML = `
Wins:${score.wins}  Losses:${score.losses}  Draws:${score.draws}`;
}