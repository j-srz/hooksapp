import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe('Pruebas en el useCounter', () => { 

  test('debe retornar los valores por defecto', () => { 

		const { result } = renderHook( () => useCounter() );
		const { counter, decrementCounter, incrementCounter, resetCounter } = result.current;

		expect( counter ).toBe(10);
		expect( decrementCounter ).toEqual( expect.any( Function ) );
		expect( incrementCounter ).toEqual( expect.any( Function ) );
		expect( resetCounter ).toEqual( expect.any( Function ) );

	});


	test('debe de general el counter con el valor de 100', () => {

		const { result } = renderHook( () => useCounter(100) );
		const { counter, decrementCounter, incrementCounter, resetCounter } = result.current;

		expect( counter ).toBe(100);

	})

	test('debe de incrementar el contador', () => {
		
		const { result } = renderHook( () => useCounter() );
		const { counter, incrementCounter } = result.current;

		act(() => {
			incrementCounter();
			incrementCounter(2);
		})

		expect( result.current.counter ).toBe(13);

	})

	test('debe de decrementar el contador', () => {
		
		const { result } = renderHook( () => useCounter() );
		const { counter, decrementCounter } = result.current;

		act(() => {
			decrementCounter();
			decrementCounter(2);
		})

		expect( result.current.counter ).toBe(7);

	})

	test('debe de resetear el contador', () => {
		
		const { result } = renderHook( () => useCounter(5) );
		const { counter, resetCounter, decrementCounter } = result.current;

		act(() => {
			decrementCounter(2);

			resetCounter();
		})

		expect( result.current.counter ).toBe(5);

	})


 })