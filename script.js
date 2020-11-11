const form=document.getElementById('form');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
const messageContainer=document.querySelector('.message-container');
const message=document.getElementById('message');
let isValid=false,passwordsMatch=false;
const validateForm=()=>{
    isValid=form.checkValidity();
    if(!isValid){
        message.textContent='Please Fill out all fields.';
        message.style.color="red";
        messageContainer.style.borderColor='red';
    }
    if(password.value===password2.value){
        passwordsMatch=true;
        password.style.borderColor='green';
        password2.style.borderColor='green';
    }else{
        password.style.borderColor='red';
        password2.style.borderColor='red';
        passwordsMatch=false;
        message.textContent='Make sure passwords match.';
        message.style.color="red";
        messageContainer.style.borderColor='red';
        return;
    }
    if(isValid && passwordsMatch){
        message.textContent='Successfully Registered!';
        message.style.color='green';
        messageContainer.style.borderColor='green';
    }
}
const storeFormData=()=>{
    const user={
        name:form.name.value,
        phone:form.getElementsByClassName.value,
        email:form.email.value,
        website:form.website.value,
        password:form.password.value
    }
    console.log(user);
}
const processFormData=(e)=>{
    e.preventDefault();
    validateForm();
    if(isValid && passwordsMatch)
        storeFormData();
}
form.addEventListener('submit',processFormData)