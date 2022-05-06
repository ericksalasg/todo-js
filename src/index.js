import './styles.css';
import { Todo, TodoList } from './classes/'
import { crearTodoHTML } from './js/componentes';

export const todolist = new TodoList();


todolist.todos.forEach( crearTodoHTML );

/* const newTodo = new Todo('Aprender JS');
todolist.nuevoTodo(newTodo);*/
todolist.todos[0].imprimirClase(); 

console.log("todos", todolist.todos);
