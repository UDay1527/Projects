let laptimings = '';

document.querySelector('.js-lap-button').addEventListener('click', ()=>
{   
    const splice = document.querySelector('.run-time').innerHTML;
    const splice1 = splice.slice(0,2);
    const splice2 = splice.slice(3,5);
    const splice3 = splice.slice(6);
    if(parseInt(splice1) === 0 && parseInt(splice2) === 0)
    {
        if(parseInt(splice3) === 0)
        {
            document.querySelector('.lap-text').innerHTML = '';
        }
    }
    else
    {
        const laptime =`<p class="result-time">${splice1} : ${splice2} : ${splice3}`;

        laptimings += laptime;

        document.querySelector('.lap-text').innerHTML = laptimings;
    }
})

let isClockRunning = false;
let interval;

document.querySelector('.js-start-button').addEventListener('click', () => {
    if(!isClockRunning){
        interval = setInterval(()=> 
        {
            document.querySelector('.js-start-button').innerHTML = 'stop';
            timeIncrement();
            isClockRunning = true;
        },10);
    }
    else
    {
        document.querySelector('.js-start-button').innerHTML = 'start';
        document.querySelector('.reset-button').innerHTML = `<button class="reset-button-cs">reset</button>`;
        clearInterval(interval);
        isClockRunning = false;
    }
});

document.querySelector('.reset-button').addEventListener('click',()=> 
{
    document.querySelector('.run-time').innerHTML = '00:00:00'
    document.querySelector('.reset-button').innerHTML = '';
    laptimings = '';
    document.querySelector('.lap-text').innerHTML = '';
    if(document.querySelector('.js-start-button').innerHTML = 'stop')
    {
        isClockRunning=false;
        clearInterval(interval);
        document.querySelector('.js-start-button').innerHTML = 'start';
    }
})


const timeIncrement = () => {
    const slicing = document.querySelector('.run-time').innerHTML;

    let slicingfront = slicing.slice(0,2);
    let slicingmiddle = slicing.slice(3,5);
    let slicingback = slicing.slice(6);

    if(slicingback === '59' && slicingmiddle !== '59')
    {
        slicingmiddle = parseInt(slicingmiddle) + 1;
        slicingmiddle = ('0' + slicingmiddle).slice(-2);
        document.querySelector('.run-time').innerHTML = slicingfront +':' + slicingmiddle + ':00';
    }
    else if(slicingback === '59' && slicingmiddle === '59')
    {   
        slicingfront = parseInt(slicingfront) + 1;
        slicingfront = ('0' + slicingfront).slice(-2);
        document.querySelector('.run-time').innerHTML = slicingfront + ':00:00';
    }
    else
    {
        slicingback = parseInt(slicingback) + 1;
        slicingback = ('0' + slicingback).slice(-2);
        document.querySelector('.run-time').innerHTML = slicingfront + ':' + slicingmiddle + ':' + slicingback;
    }
}
