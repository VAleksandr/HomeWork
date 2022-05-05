import { getTodos } from '../../api/api-handlers';
import { Todo } from '../todo/todo';
import { Header } from '../header/header';
import { findUser, logout } from '../../shared/services/header-service';

export const mainPageHandler = async () => {
    let todos = [];
    const todosWrapper = document.querySelector('.main__todos');
    const mainHeaderOut = document.querySelector('.main');
    const mainHeader = new Header(findUser, logout);

    mainHeaderOut.prepend(mainHeader.getHeaderTemplate());

    await getTodos().then(todosArr => {
        todos = Object.keys(todosArr).map(key => {
            const todo = { id: key, ...todosArr[key]};

            todosWrapper.append(new Todo(todo).getTodo());

            return todo;
        });
    });
}
