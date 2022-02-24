/**
 * CRUD
 *  C for Create
 *  R for Read
 *  U for update
 *  D for Delete
 */ 
 
let parent= document.querySelector("#testId")

let h1= document.createElement('h1')
h1.className="demo-class"
h1.innerHTML="I am anis......"
parent.appendChild(h1) 
 
let formId =document.getElementById('formId')
let userName =document.getElementById('userName');
let pass =document.getElementById('pass');
let passVal=form.elements['userName']; // by index 
let userVal= userName.value;
formId.addEventListener('submit', function(event){
    event.preventDefault()
    console.log(userVal);
    console.log(passVal);
    if(userVal.length==0){
        alert('User name is null')
    }else{
        alert(userVal)
    }
})


