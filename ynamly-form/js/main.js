// Login show and Hidden

const signUp = document.getElementById('sign-up');
const signIn = document.getElementById('sign-in');
const logIn = document.getElementById('login-in');
const logUp = document.getElementById('login-up');

signUp.addEventListener('click', ()=>{
    // remove classes first if exist
    logIn.classList.remove('block');
    logUp.classList.remove('none');

    // add classes
    logIn.classList.add('none');
    logUp.classList.add('block');
});

signIn.addEventListener('click', ()=>{
    // remove classes first if exist
    logIn.classList.remove('none');
    logUp.classList.remove('block');

    // add classes
    logIn.classList.add('block');
    logUp.classList.add('none');
});