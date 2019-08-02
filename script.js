var scores, roundScore, activePlayer, gamePlaying, prevValue, dice;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
    
    // random number
    // dice gives us random number between 1 and 6.
    dice = Math.floor(Math.random()*6)+1;
    
    // display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    // Update the round score IF the roll number is NOT a 1
    if(dice > 1){
        // add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else if(prevValue === 6 && dice === 6){
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();
      }
        else {
        // next player
        nextPlayer();
    }
        prevValue = dice;
        }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
    //  add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore; 
    
    // update the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    // check if player won the game
    if(scores[activePlayer] >= 100){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        // next player
    nextPlayer();
    }
    }
});

function nextPlayer(){
    // next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    dice = 0;
    gamePlaying = true;
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}


















