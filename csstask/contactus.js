var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');

function validateName()
{
    var name=document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.innerHTML='Name is required';
        return false;
    }
    if(!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/))
        { 
        nameError.innerHTML="Write full name";
        return false;
        }
        nameError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
        return true;
}
function validateEmail(){
    var email =document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML='Email is required';
        return false;
    }
    if(!email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/))
        { 
        emailError.innerHTML="Email is invalid";
        return false;
        }
        emailError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
        return true;
}
function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 20;
    var left = required - message.length;
    if(left > 0){
        messageError.innerHTML=left + 'more characters required ';
        return false;
    }
    messageError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
    return true;
}
function validateForm()
{
    if(!validateName() || !validateEmail() || !validateMessage()){
        submitError.style.display='block';
        submitError.innerHTML='Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;

    }
    else{
        alert("Message send successfully!!!");
    }
}






// function validForm(){

//     var name=document.custom_form.name;
//     var email=document.custom_form.email;
//     var message=document.custom_form.message;
//     if(name.value=="" || !name.value.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
//        name.nextElementSibling.style.display="block";
//        name.style.border="1px solid #f00";
//       return false
//     }
//     else
//     {
//     name.nextElementSibling.style.display="none";
//        name.style.border="1px solid transparent";
//    }
//     if(!email.value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) || email.value==""){
//        email.nextElementSibling.style.display="block";
//       email.style.border="1px solid #f00";
//       return false;
//     }
//    else
//     {
//     email.nextElementSibling.style.display="none";
//       email.style.border="1px solid transparent";
//     }
//     if(name.value==""){
//       message.nextElementSibling.style.display="block";
//        message.style.border="1px solid #f00";
//        return false;
//     }
//     else
//     {
//     name.nextElementSibling.style.display="none";
//        name.style.border="1px solid transparent";
//     }


//    }