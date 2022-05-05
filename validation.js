const emailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //w3resource

const form = document.getElementById('form');
const inputHolder = document.getElementById('input-holder');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    inputHolder.classList.remove('error');
    
    if(!email.value || !emailValidationRegex.test(email.value)) {
        e.preventDefault();
        inputHolder.classList.add('error');
    } 
});