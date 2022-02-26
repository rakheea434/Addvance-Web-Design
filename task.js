let btn =document.getElementById('btn')
let task =document.getElementById('task')

let uncompleted =document.getElementById('uncompleted ')
let completed =document.getElementById('completed')


btn.addEventListener('click', function(event){
    event.preventDefault();
     let list= document.createElement('li');
     list.className="list-class"
     list.innerHTML=task.value ;

     if(task.value!=0){
         uncompleted.appendChild(list);  
     }
})

let listClass =document.querySelector('#uncompleted li')
if (listClass != undefined) {
    listClass.addEventListener('click', function(event){
        event.preventDefault(); 
        let list2= document.createElement('li');
        list2.className="list-class" 
        list2.innerHTML=listClass.textContent ;
        completed.appendChild(list2); 
        listClass.remove()
        console.log('hello');
        console.log('hello');

    })
}

