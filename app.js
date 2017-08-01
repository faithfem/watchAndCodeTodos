var todos = ['item 11', 'item 12', 'item 13']

function displayTodos(){
  console.log('MyTodos:', todos);
}

function addTodo(todo){
  todos.push(todo);
  displayTodos();
}

function changeTodo(position, newValue){
  todos[position] = newValue;
  displayTodos();
}

function deleteTodo(position){
  todos.splice(position,1);
  displayTodos();
}


