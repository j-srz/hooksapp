import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewtodo }) => {

	const { formState, searchBar, onInputChange, onResetForm } = useForm({
		searchBar: '', 
	})



	const onFormSubmit = ( e ) => {
		e.preventDefault();
		
		if ( searchBar.trim() === '' ) {
			onResetForm();
			return
		};

		onNewtodo({
			id: new Date().getTime()*3,
			description: searchBar,
			done: false,
		});

		onResetForm();
		
	}
	

  return (
    <form onSubmit={onFormSubmit}>
			<input 
					type="text" 
					placeholder="¿Qué hay que hacer?"
					className="form-control"
					name="searchBar"
					value={searchBar}
					onChange={onInputChange}
			/>
			<button
					type="submit"
					className="btn btn-outline-primary mt-3"
			>Agregar</button>
	</form>
  )
}
