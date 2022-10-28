const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

const inputForm = document.getElementById('form-control');
const err = document.getElementById('error');
const err2 = document.getElementById('error2');
const err3 = document.getElementById('error3');
const err4 = document.getElementById('error4');

const claimBTN = document.querySelector('.claim-btn');

inputForm.addEventListener('submit', checkInformation);

function checkInformation(event) {
    event.preventDefault();

    // let firstMessages = '';
    let firstNameErrMessage = []
    let lastNameErrMessage = []
    let passwordErrMessage = []
    let emailErrMessage = []

    const validateEmail = (email) => {
        let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
        return regex.test(email);
    };
    
    
    // First Name
    if(firstName.value === '') {
        firstNameErrMessage.push('First name cannot be empty')
        firstName.classList.add('red-b')
        firstName.nextElementSibling.style.visibility = 'visible';
    } else {
        firstNameErrMessage.push('');
        firstName.classList.remove('red-b')
        firstName.nextElementSibling.style.visibility = 'hidden';
    }

    // last name
    if(lastName.value === '') {
        lastNameErrMessage.push('Last name cannot be empty')
        lastName.classList.add('red-b')
        lastName.nextElementSibling.style.visibility = 'visible';
    } else {
        lastNameErrMessage.push('');
        lastName.classList.remove('red-b')
        lastName.nextElementSibling.style.visibility = 'hidden';
    }

    // email
    if(validateEmail(email.value) === false) {
        emailErrMessage.push('Looks like this is not an email')
        email.classList.add('red-b');
        email.nextElementSibling.style.visibility = 'visible';
    } else {
        emailErrMessage.push('');
        email.classList.remove('red-b');
        email.nextElementSibling.style.visibility = 'hidden';
    }

    // password
    if(password.value === '') {
        passwordErrMessage.push('Password cannot be empty')
        password.classList.add('red-b');
        password.nextElementSibling.style.visibility = 'visible';
    } else {
        passwordErrMessage.push('');
        password.classList.remove('red-b');
        password.nextElementSibling.style.visibility = 'hidden';
    }

    // Err messages

    if(firstNameErrMessage.length > 0) {
        err.innerText = firstNameErrMessage.join(', ')
    }

    if(lastNameErrMessage.length > 0) {
        err2.innerText = lastNameErrMessage.join(', ')
    }

    if(emailErrMessage.length > 0) {
        err3.innerText = emailErrMessage.join(', ')
    }

    if(passwordErrMessage.length > 0) {
        err4.innerText = passwordErrMessage.join(', ')
    }
}