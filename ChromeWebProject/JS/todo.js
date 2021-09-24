const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDO(newTodo){
    const li = document.createElement("li");
    
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDO(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);