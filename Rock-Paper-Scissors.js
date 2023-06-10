let score = JSON.parse(localStorage.getItem('score')) ||      
    {
      wins: 0,
      loses: 0,
      ties: 0,
      count: 10
    };
      updateScoreElement();

      document.querySelector('.js-rock-button').addEventListener('click', () => 
      {
        game('rock');
      });

      document.querySelector('.js-paper-button').addEventListener('click', () => 
      {
        game('paper');
      });

      document.querySelector('.js-scissors-button').addEventListener('click', () => 
      {
        game('scissors');
      });

      const resetButtonOnClickEvents = () => 
      {
        console.log('hi');
        document.querySelector('.result-div').innerHTML = 
        `<p class="js-result winning"></p>
        <p class="js-moves scores" ></p>
        <p class="js-score"></p>
        <p class="js-remains"></p>`;
        score.wins = 0; 
        score.loses = 0; 
        score.ties = 0; 
        score.count = 10; 
        localStorage.removeItem('score'); 
        document.querySelector('.js-result').innerHTML = '';
        document.querySelector('.js-moves').innerHTML = '';
        clearInterval(intervalId);
        isAutoPlaying = false;
        AutoPlaying;
        updateScoreElement();
        document.querySelector('.auto-play-button').innerHTML = 'Auto play';
      }

      document.querySelector('.reset-button').addEventListener('click', () =>
      {
        if(score.count !== 10)
        {
          clearInterval(intervalId);
          isAutoPlaying = false;

          document.querySelector('.result-div').innerHTML = 
          `<p> Are you sure want to reset the score? </p> 
          <button class='js-yes-button'>yes</button> 
          <button class='js-no-button'>no</button>`;

          document.querySelector('.js-yes-button').addEventListener('click', () => 
          {
            resetButtonOnClickEvents();
          });

          document.querySelector('.js-no-button').addEventListener('click', () => 
          {
            updateScoreElement();
          });

        }
      });

      let isAutoPlaying =false;
      let intervalId;
      
      const AutoPlaying = () => {
        if(!isAutoPlaying)
        {
          document.querySelector('.auto-play-button').innerHTML = 'Stop playing';
            intervalId = setInterval(() => 
            {
              const playerMove = pickComputerMove();
              game(playerMove);
            }
              ,800)
          isAutoPlaying = true;
        }
        else{
          document.querySelector('.auto-play-button').innerHTML = 'Auto play';
          clearInterval(intervalId);
          isAutoPlaying = false;
        }
      };

      document.body.addEventListener('keydown', (event) => {
        if(event.key === 'a' || event.key === 'A'){
          AutoPlaying;
        }
      });

      document.querySelector('.auto-play-button').addEventListener('click', AutoPlaying);

      document.body.addEventListener('keydown', (event) => {
          if(event.key === 'r' || event.key === 'R'){
            game('rock');
          } else if (event.key === 'p' || event.key === 'P'){
            game('paper');
          }else if(event.key === 's' || event.key === 'S'){
            game('scissors');
          }
      });

    function game(value){
      if(score.count === 1)
      {

        clearInterval(intervalId);
        isAutoPlaying = false;

        let computerMove = pickComputerMove();
      if(value === 'rock'){
          if (computerMove === 'rock'){
          win = 'Tie.';
        }else if (computerMove === 'paper'){
          win = 'computer wins.';
        }else {
          win = 'you win.';
        }
      }
      
      if(value === 'paper'){
          if (computerMove === 'rock'){
          win = 'you win.';
        }else if (computerMove === 'paper'){
          win = 'Tie.';
        }else {
          win = 'computer wins.';
        }
      }

      if(value === 'scissors'){
        if (computerMove === 'rock'){
          win = 'computer wins.';
        }else if (computerMove === 'paper'){
          win = 'you win.';
        }else {
          win = 'Tie.';
        }
      }
  
      if(win === 'you win.')
      {
        score.count -= 1;
        score.wins += 1;
      }
      else if(win === 'computer wins.')
      {
        score.count -= 1;
        score.loses += 1;
      }
      else
      {
        score.count -= 1;
        score.ties += 1;
      }

      localStorage.setItem('score',JSON.stringify(score));

      updateScoreElement();    

        if(score.wins > score.loses){
          document.querySelector('.js-result').innerHTML = 'GAME OVER \'YOU WON\'';
          document.querySelector('.js-moves').innerHTML =  `Last Pick: you <img src="images/${value}-emoji.png" class="pictures"> computer <img src="images/${computerMove}-emoji.png" class="pictures">`;
        }
        else if(score.loses > score.wins){
          document.querySelector('.js-result').innerHTML = 'GAME OVER \'COMPUTER WON\'';
          document.querySelector('.js-moves').innerHTML =  `Last Pick: you <img src="images/${value}-emoji.png" class="pictures"> computer <img src="images/${computerMove}-emoji.png" class="pictures">`;
        }
        else{
          document.querySelector('.js-result').innerHTML = 'GAME OVER \'BOTH OF YOU WON\'';
          document.querySelector('.js-moves').innerHTML =  `Last Pick: you <img src="images/${value}-emoji.png" class="pictures"> computer <img src="images/${computerMove}-emoji.png" class="pictures">`;
        }
      }

      else if(score.count > 1 && score.count < 11)
      {
      let computerMove = pickComputerMove();
      if(value === 'rock'){
          if (computerMove === 'rock'){
          win = 'Tie.';
        }else if (computerMove === 'paper'){
          win = 'computer wins.';
        }else {
          win = 'you win.';
        }
      }
      
      if(value === 'paper'){
          if (computerMove === 'rock'){
          win = 'you win.';
        }else if (computerMove === 'paper'){
          win = 'Tie.';
        }else {
          win = 'computer wins.';
        }
      }

      if(value === 'scissors'){
        if (computerMove === 'rock'){
          win = 'computer wins.';
        }else if (computerMove === 'paper'){
          win = 'you win.';
        }else {
          win = 'Tie.';
        }
      }
  
      if(win === 'you win.')
      {
        score.count -= 1;
        score.wins += 1;
      }
      else if(win === 'computer wins.')
      {
        score.count -= 1;
        score.loses += 1;
      }
      else
      {
        score.count -= 1;
        score.ties += 1;
      }

      localStorage.setItem('score',JSON.stringify(score));
      
      updateScoreElement();    
      
      document.querySelector('.js-result').innerHTML = win;

      document.querySelector('.js-moves').innerHTML = `you <img src="images/${value}-emoji.png" class="pictures"> computer <img src="images/${computerMove}-emoji.png" class="pictures">`;
    }
  }

    function updateScoreElement()
    {
      document.querySelector('.result-div').innerHTML = 
        `<p class="js-result winning"></p>
        <p class="js-moves scores" ></p>
        <p class="js-score"></p>
        <p class="js-remains"></p>`;

      document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} loses: ${score.loses} ties: ${score.ties}`;

      document.querySelector('.js-remains').innerHTML =`Remaining Chances ${score.count}`;
    }

    function pickComputerMove()
    {
      let computerMove = '';
      const randomNumber = Math.random();
      if (randomNumber >= 0 && randomNumber <= 1/3){
        computerMove = 'rock';
      }
      else if(randomNumber > 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
      }
      else {
        computerMove = 'scissors';
      }
      return computerMove;
    } 