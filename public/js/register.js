const regForm = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

// Setting form in default to invalid
let isValid = false;

function validateForm(){
    // using contraint API
    isValid = regForm.checkValidity();

    //Style main message for an error
    if(!isValid){
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    
    return;

    }
    // changes the styling for the password boxes and if the password matches or checks that passwords do match
    if(password1El.value === password2El.value){
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
    
    return;

    }

    //if form is valid and passwords match
    if (isValid && passwordsMatch){
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

// Making this function async to improve security and post to database
// function storeFormData(){
//     const user ={
//         name: form.name.value,
//         phone: form.phone.value,
//         email: form.email.value,
//         age: form.age.value,
//         weight: form.weight.value,
//         height: form.height.value,
//         password: form.password.value
//     };

//
// }

const signupNewUser = async (e) =>{
     e.preventDefault();

     validateForm();

     if(isValid && passwordsMatch){

     const user = {
                user_name: regForm.name.value,
                phone: regForm.phone.value,
                email: regForm.email.value,
                age: regForm.age.value,
                weight: regForm.weight.value,
                height: regForm.height.value,
                password: regForm.password.value
            }

    if (user){
        const response = await fetch('/register/login',{
            method:'POST',
            body: JSON.stringify(user),
            headers: {'Content-Type' : 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert ('Failed to sign up.');
        }
    }
}};


document.querySelector('form').addEventListener('click', signupNewUser);