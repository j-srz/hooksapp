import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

	const [formState, setFormState] = useState({
		username: 'Jesu',
		email: 'jesus@correo.com'
	})

	const { username, email } = formState;

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[ name ]: value,
		})

	}

	// useEffect(() => {
	// 	console.log('Hola');
	// }, []);

	// useEffect(() => {
	// 	console.log('formState');
	// }, [formState]);

	// useEffect(() => {
	// 	console.log('email');
	// }, [email]);
	

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input 
				type="text" 
				className="form-control"
				placeholder="Username"
				name="username"
				value={ username }
				onChange={ onInputChange }
			/>

      <input 
				type="email" 
				className="form-control mt-2"
				placeholder="correo@correo.com"
				name="email"
				value={ email }
				onChange={ onInputChange }
			/>
			
			{
				(username === 'Jesus') && <Message /> 
			}

    </>
  );
};
