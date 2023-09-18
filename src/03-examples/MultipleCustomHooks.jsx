import { useCounter, useFetch } from "../hooks";
import { Quote, LoadingQuote } from "./";

export const MultipleCustomHooks = () => {

  const { data, isLoading, hasError, getFetch } = useFetch(`https://taylor-swift-api.sarbo.workers.dev/lyrics?shouldRandomizeLyrics=true&numberOfParagraphs=1`);

  const {counter, incrementCounter} = useCounter(1);

  const refreshQuote = () => {
    getFetch();
    incrementCounter(1);
  }

  return (
    <>
        <h1>Taylor Swift Lyrics generator</h1>
        <hr />

        {
          isLoading 
            ? <LoadingQuote />
            : <Quote data={data} />
        }

        <button 
          className="btn btn-primary" 
          onClick={refreshQuote}
          disabled={ isLoading }
        >
        You has Refreshed
        <span className="badge text-bg-secondary">{counter}</span>
        times
        </button>


    </>
  )
}
