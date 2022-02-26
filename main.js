/**
 * CRUD
 *  C for Create
 *  R for Read
 *  U for update
 *  D for Delete
 */ 
 
 const user="admin";
 const password="12345"
 
let btn =document.getElementById('btn')
let userName =document.getElementById('userName');
let pass =document.getElementById('pass');  
let error =document.getElementById('error');  

btn.addEventListener('click', function(event){
    event.preventDefault() ;
    error.style.display='block';
    if(userName.value.length==0){
        error.innerHTML='User name is Empty';
    }else if(pass.value.length==0){
       
        error.innerHTML='Password is Empty';
    }else{

        if(userName.value === user && pass.value === password){
            error.style.color='blue'
            error.innerHTML='You are loged in';
        } else if(userName.value !== user){
             error.innerHTML='User name is wrong'; 
       } else if(pass.value !== password){
            error.innerHTML='Password is wrong';   
       }
       else{
            error.innerHTML='Something is wrong';  
       }
    }
    
    
})


