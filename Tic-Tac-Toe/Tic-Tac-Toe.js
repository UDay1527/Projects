let whoseMove = true;

let moves =0;

document.querySelector('.js-restart-button').addEventListener('click', () =>
{
    resetprocess();
})

function result(value) 
{
    if(value === 0)
    document.querySelector('.js-mover-text').innerHTML = 'GAME OVER YOU WON';
    
    else if(value === 1)
    document.querySelector('.js-mover-text').innerHTML = 'GAME OVER COMPUTER WON';
    
    else if(value === 2)
    document.querySelector('.js-mover-text').innerHTML = 'GAME OVER DRAW';

    else if(value === 3)
    document.querySelector('.js-mover-text').innerHTML = 'CAN\'T PICK THIS ONE';

    else if(value === 4)
    document.querySelector('.js-mover-text').innerHTML = 'PLAYER MOVE';

    else if(value === 5)
    document.querySelector('.js-mover-text').innerHTML = 'COMPUTER MOVE';
};

document.querySelectorAll('.card').forEach((cardNumber,index) => 
{
    cardNumber.addEventListener('click', () => 
    {
        if(cardNumber.innerHTML === 'X' || cardNumber.innerHTML === 'O')
        {
            result(3);
            whoseMove = false;

            setTimeout(() => 
            {
                whoseMove = true;
                result(4);
            },800);
        }
        else if(whoseMove)
        {
            cardNumber.innerHTML = 'X';
            whoseMove = false;
            setTimeout(() => 
            {
                pickComputerMove();
            },1000);
            moves += 1;
            
        }
    });
});

let numList = [];

function reset() 
{
    document.querySelector('.js-reset-button').innerHTML = 
            `<button class="reset"> RESET </button>`;
    document.querySelector('.reset').addEventListener('click', () => 
    {
        resetprocess();
    });
}

function resetprocess()
{
    for(let i=0;i<numList.length;i++)
            {
                num = numList[i];
                num = '.' + num[0];
                document.querySelector(num).innerHTML = '';
            }
        document.querySelector('.js-reset-button').innerHTML = '';
        result(4);
        whoseMove = true;
        moves = 0;
}

function pickComputerMove()
{
    if(moves === 9)
    {
        if(final() === 'X')
        {
            result(0);
            reset();
        }
        else if(final() === 'O')
        {
            result(1);
            reset();
        }
        else
        {
            result(2);
            reset();
        }
    }
    else if(moves>= 5 && final())
    {
        if(final() === 'X')
        {
            result(0);
            reset();
        }
        else
        {
            result(1);
            reset();
        }
        
    }
    else
    {
        result(5);  
        let computerValue = Math.floor(Math.random() * 9);

        document.querySelectorAll('.card').forEach((card,index) => 
        {
            numList[index] = card.classList;
        })

        let num = numList[computerValue];
        num = '.' + num[0];

        if(document.querySelector(num).innerHTML === 'X' || document.querySelector(num).innerHTML === 'O')
        {
            pickComputerMove();
        }
        else
        {
            document.querySelector(num).innerHTML = 'O';
            moves += 1;
        }
        
        if(moves >= 5 && final())
        {
            if(final() === 'X')
            {
                result(0);
                reset();
            }
            else if(final() === 'O')
            {
                result(1);
                reset();
            }
        }
        else
        {
            setTimeout(() => 
            {
                whoseMove = true;
                result(4);
            },1000);
        }
    }
};

const final = () => {
    const set1 = [0,1,2];
    const set2 = [0,3,6];
    const set3 = [0,2];

    const fun1 = () => {
        for(let i=0;i<set1.length;i++)
        {
            if(condition(set1[i]) !== '')
            {
                if(condition(set1[i]) === condition(set1[i]+3) && condition(set1[i]) === condition(set1[i]+6))
                {
                    return condition(set1[i]);
                    break;
                }
            }
        }
    }

    const fun2 = () =>
    {
        for(let i=0;i<set2.length;i++)
        {
            if(condition(set2[i]) !== '')
            {
                if(condition(set2[i]) === condition(set2[i]+1) && condition(set2[i]) === condition(set2[i]+2))
                {
                    return condition(set2[i]);
                    break;
                }
            }
        }
    }

    const fun3 = () =>
    {
        if(condition(set3[0]) === condition(set3[0]+4) && condition(set3[0]) === condition(set3[0]+8))
        {
            return condition(set3[0]);
        }
        else if(condition(set3[1]) === condition(set3[1]+2) && condition(set3[1]) === condition(set3[1]+4))
        {
            return condition(set3[1]);
        }
    }

    function condition(value)
    {
        return document.querySelector(calculating(value)).innerHTML;
    }

    function calculating (value)
    {
        num = numList[value];
        num = '.' + num[0];
        return num;
    }
    
    const value1 = fun1();
    const value2 = fun2();
    const value3 = fun3();

    if(value1){
        return value1;
    }
    else if(value2){
        return value2;
    }
    else if(value3){
        return value3;
    }
}