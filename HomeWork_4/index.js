const btn = document.getElementById('btn');
const input = document.getElementById('inp');
const todo_text = document.getElementById('todo');
const url = 'https://jsonplaceholder.typicode.com/todos/';

const requestTodo = async (url_todo) => {
  return fetch(url_todo)
    .then(response => {
      response.ok ? 
        response.json().then(result => outputTodo(result)) :
        response.json().then(() => error());
  });
}

const error = () => {
  const todo_error = document.createElement('p'); 

  deleteTodo();
  todo_error.innerText = 'Error'; 
  todo_text.append(todo_error); 
}

const outputTodo = todos => {
  const todo_id = document.createElement('p');
  const todo_title = document.createElement('p');
  const todo_completed = document.createElement('p');  
 
  deleteTodo(); 
  todo_id.innerText = `id: ${todos.id}`;
  todo_title.innerText = `title: ${todos.title}`;
  
  todos.completed ? 
    todo_completed.innerText = 'status: completed': 
    todo_completed.innerText = 'status: in progress';
  
  todo_text.append(todo_id, todo_title, todo_completed);
}

const deleteTodo = () => document.querySelectorAll('p').forEach(teg_p => teg_p.remove());

btn.onclick = () => {
  const number_todo = input.value;

  requestTodo(`${url}${number_todo}`);    
}
