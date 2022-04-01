const requestTodo = async (n) => {
  const todos_container = document.getElementById('todos_container');
  for (let i = 1; i <= n; i++) {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
      .then(response => {
        if(response.ok) {
          response.json().then(result => outputTodo(result));
        } 
    });    
  }
}

const outputTodo = todos => {
  const todo_text = document.createElement('div');
  const todo_id = document.createElement('p');
  const todo_title = document.createElement('p');
  const todo_completed = document.createElement('p');  
  const todoDeleteBtn = document.createElement('button');
  
  todo_id.innerText = `id: ${todos.id}`;
  todo_title.innerText = `title: ${todos.title}`;
  todoDeleteBtn.innerText = 'Delete';

  todo_text.classList.add('todo_text');
  todoDeleteBtn.classList.add('todoDeleteBtn');
  
  todos.completed ? 
    todo_completed.innerText = 'status: completed': 
    todo_completed.innerText = 'status: in progress';
  
  todos_container.append(todo_text);
  todo_text.append(todo_id, todo_title, todo_completed, todoDeleteBtn);
  deleteTodo();
}

const deleteTodo = () => {
  todos_container.querySelectorAll('button').forEach(todoDeleteBtn => { 
    todoDeleteBtn.onclick = () => todoDeleteBtn.closest('div').remove();
  }); 
}

requestTodo(30);    
