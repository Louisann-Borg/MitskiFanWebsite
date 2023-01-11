/*Carousel */
const carousel = new bootstrap.carousel ('#mycarousel')

/* Contact Page */

function validateForm(){

    document.getElementById('errors-content').innerHTML = "";
    document.getElementById('errors').classList.remove('d-block');
    document.getElementById('errors').classList.add('d-none');
    
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var errors = "";

    if(isEmpty(firstName) || isEmpty(lastName) || isEmpty(email) || isEmpty(message)){
        errors += "<li>Please Fill in all Fields.</li>"
    }

    if(errors != ""){
        document.getElementById('errors-content').innerHTML = "<ul class='errors-list'>" +errors+"</ul>";
        document.getElementById('errors').classList.remove('d-none');
        document.getElementById('errors').classList.add('d-block');
    }

    if(isTooShort(message)){
        errors += "<li> Message too short, please provide more details. </li>";
    }
    if(errors != ""){
        document.getElementById('errors-content').innerHTML = "<ul class='errors-list'>" +errors+"</ul>";
        document.getElementById('errors').classList.remove('d-none');
        document.getElementById('errors').classList.add('d-block');

        return false;
    }
    else {
        return true;
    }
}

function isEmpty(field){
    if(field == ''){
        return true;
    }
    else{
        return false;
    }
}

function isTooShort(field){
    if( field.length < 20){
        return true;
    }
    else{
        return false;
    }
}
