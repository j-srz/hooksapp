import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {


	const { counter, decrementCounter, resetCounter, incrementCounter} = useCounter(1)

  return (
    <>
        <h1>Counter with hook: {counter}</h1>
        <hr />
        <button className="btn btn-primary" onClick={() => incrementCounter(10)}>+1</button>
        <button className="btn btn-primary" onClick={() => resetCounter}>Reset</button>
        <button className="btn btn-primary" onClick={() => decrementCounter(10)}>-1</button>
    </>
  )
}
