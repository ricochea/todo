
import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';


export const todoList = new TodoList();
//const tarea = new Todo(''); 
//todoList.nuevoTodo( tarea );
//console.log( todoList );
//crearTodoHtml( tarea );

todoList.todos.forEach( todo => crearTodoHtml( todo ) );
//todoList.todos.forEach( crearTodoHtml); //Como solo regresa 1 argumento, se puede 
// simplificar la linea de este modo.