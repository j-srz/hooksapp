import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

const initialState = [
	// {
	// 	id: new Date().getTime(),
	// 	description: 'Recolectar la piedra del alma',
	// 	done: false,
	// },

];

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
}



export const TodoApp = () => {

	const [ todos, dispatchTodo ] = useReducer( todoReducer, initialState, init );

	useEffect(() => {
		localStorage.setItem('todos',JSON.stringify(todos));

	}, [todos])
	
	
	const handleNewtodo = ( todo ) => {

		if (todo.description === '') return;

		const action = {
			type: "[TODO] Add Todo",
			payload: todo
		}

		dispatchTodo( action );
	}

  return (
      <>
				<h1>TodoApp: 10 <small>pendientes: 2</small></h1>
				<hr />


				<div className="row">
					<div className="col-7">
						<TodoList todos={ todos }/>
					</div>
					<div className="col-5">
						<h4>Agregar TODO</h4>
						<hr />
						<TodoAdd onNewtodo={ handleNewtodo }/>
					</div>
				</div>

				
			</>
    )
}
