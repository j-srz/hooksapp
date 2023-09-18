import { useEffect, useState } from "react"

export const useFetch = ( url ) => {

	// if (!url) throw new Error('Url required');
  
	const [state, setState] = useState({
		data: null,
		isLoading: true,
		hasError: null
	})

	const getFetch = async() => {

		setState({
			isLoading: true,
			...state,
		})

		const result = await fetch(url);
		const data = await result.json();

		setState({
			data,
			isLoading: false,
			hasError: null
		})

	}

  useEffect(() => {
		getFetch();
	}, [url])
	
  
    return {
			data:				state.data,
			isLoading:  state.isLoading,
			hasError: 	state.hasError,
			getFetch,
		};
}
