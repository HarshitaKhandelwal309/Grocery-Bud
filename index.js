const form = document.getElementById('form');
const input = document.getElementById('input');
const todo = document.getElementById('todo');
 const btn = document.getElementById('btn');
 const buttonClear = document.getElementById('clearbtn');
 let todoList = [] ;
 //if we want to add event on enter  so we add event on form
//  form.addEventListener('submit',function(e)
//  {
//      e.preventDefault();  //we use this to prevent page reload
//      console.log("U all r caught up dude");
//          addTodo();
//  })



 btn.addEventListener('click' ,function(e)
 {
          
         console.log('hello');
         e.preventDefault();
         addTodo();
 })


 function addTodo() // we call this function on pressing enter or click
 {
        // we need value in input
        

        const newTodo = input.value;
        // console.log(newTodo);

        //if there is no value enter
        if(!newTodo) 
        {
            alert("please enter task");
            return;
        }
        
 
        // we push in an array in the form of object
        let data = {
            text :newTodo ,
            complete : false

        }
        todoList.push (data);
            
            
                console.log(todoList);
             
        render();

       

 }




 // we have to render this

 function render() 
 { 
    todo.innerHTML = null;
   

    for(let i = 0 ; i<todoList.length; i++)
    {
        const item = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        checkbox.addEventListener("click",function(e){
            todoList[i].complete = e.target.checked;

            if(todoList[i].complete){
                item.classList.add("completed");
                item.classList.remove("uncompleted");
                checkbox.checked = todoList[i].complete
            }else{
                item.classList.add("uncompleted");
                item.classList.remove("completed");
                checkbox.checked = todoList[i].complete
            }
           
        })
        const text = document.createElement("p");

        text.innerText = todoList[i].text;
        const button = document.createElement("button")

        button.innerText ="X";
        button.addEventListener('click',function(e)
        {
            todoList.splice(i,1);
            render();

            
        })
        


        // we have to append this
        // append checkbox text button in li i.e. item

        item.appendChild(checkbox);
        item.appendChild(text);
        item.appendChild(button);
        // append li i.e. item in ul  i.e. todo

        todo.appendChild(item);
    

      // call render function when we push in array
        input.value = null;    
 

    }

    

 }
 
 buttonClear.addEventListener('click',function(e)
    {
        alert("r u sure");
        removeAll();
    })
    function removeAll(){
        todoList= [];
       document.getElementById("todo").innerHTML = "";
       
   }