document.querySelector('.Login-button').addEventListener('click', () => {
    document.querySelector('.container').classList.add('active');
    document.querySelector('.register-box').classList.add('active');  
});

document.querySelector('.icon-x').addEventListener('click', () => {
    document.querySelector('.container').classList.remove('active');
});

document.querySelector('.register-link').addEventListener('click', () => {
    document.querySelector('.register-box').classList.remove('active');  
    document.querySelector('.login-box').classList.add('active');  
});

document.querySelector('.login-link').addEventListener('click', () => {
    document.querySelector('.register-box').classList.add('active');  
    document.querySelector('.login-box').classList.remove('active'); 
});