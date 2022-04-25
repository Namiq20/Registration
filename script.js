const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid';
}

function checkRequired(inputs) {
    inputs.forEach(function(input) {
        if (input.value === '') {
            error(input,);
        } else {
            success(input);
        }
    });

}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} en az ${min} elementden ibaret olmalidir.`);
    }else if (input.value.length > max) {
        error(input, `${input.id} en cox ${max} element olmamalidir.`);
    }else {
        success(input);
    }
}

function checkPasswords(input1,input2) {
    if(input1.value !== input2.value) {
        error(input2, 'Parollar uygun deyil.');
    }
}

function checkPhone(input) {
    var exp = /^\d{10}$/;
    if(!exp.test(input.value))
        error(input, 'Telefon 10 elementli olmalidir.')
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([ username, email, phone, password, repassword ]);
    checkLength(username,7,15);
    checkLength(password,7,12);
    checkPasswords(password,repassword);
    checkPhone(phone);
});