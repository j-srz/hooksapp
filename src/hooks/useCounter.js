import { useState } from "react"

export const useCounter = (initialValue = 10) => {
  
  const [counter, setcounter] = useState(initialValue);


	const incrementCounter = (value) => {
		setcounter(counter+value)
	}

	const decrementCounter = (value) => {
		setcounter(counter-value)
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
