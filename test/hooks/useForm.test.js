import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"


describe('Pruebas en el useForm', () => {

  test('debe regresar los valores por defecto', () => {

		const initialForm = {
			name: 'Jesus',
			email: 'correo@correo.com',
		}

		const { result } = renderHook( () => useForm(initialForm) );

		expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any( Function ),
      onResetForm: expect.any( Function )
    })

	})


	test('debe de cambiar el nombre del formulario', () => {

		const initialForm = {
			name: 'Jesus',
			email: 'correo@correo.com',
		}

		const { result } = renderHook( () => useForm(initialForm) );
		
		const { onInputChange } = result.current;

		const newValue = 'Juan';

		act(() => {
			onInputChange({target: {name: 'name', value: newValue}});
		})


		expect( result.current.name ).toBe('Juan')
		expect( result.current.formState.name ).toBe('Juan')

	})


	test('debe de realizar el reset del formulario', () => {

		const initialForm = {
			name: 'Jesus',
			email: 'correo@correo.com',
		}

		const { result } = renderHook( () => useForm(initialForm) );
		
		const { onInputChange, onResetForm } = result.current;

		const newValue = 'Juan';


		act(() => {
			onInputChange({target: {name: 'name', value: newValue}});
			onResetForm();
		})


		expect( result.current.name ).toBe(initialForm.name)
		expect( result.current.formState.name ).toBe(initialForm.name)

	})







})