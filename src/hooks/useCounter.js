import { useState } from "react"

export const useCounter = (initialValue = 10) => {
  
  const [counter, setcounter] = useState(initialValue);


	const incrementCounter = (value = 1) => {
		setcounter((current) => current+value)
	}

	const decrementCounter = (value = 1) => {

		// if ( counter === 0 ) return;
		
		setcounter((current) => current-value)
	}

	const resetCounter = () => {
		setcounter(initialValue);
	}

  return {
		counter,
		incrementCounter,
		decrementCounter,
		resetCounter
	}
}
