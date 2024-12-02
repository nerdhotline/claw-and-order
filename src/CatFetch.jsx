import { useMachine } from '@xstate/react'
import { FetchMachine } from './machines/FetchMachine.ts'
import { catObject, apiLink } from './utility/Constants';
import { useState, useEffect } from 'react';

function CatFetch() {
  const [index, setIndex] = useState(0);

  const [queryPull, setQueryPull] = useState(null);
  const [state, send] = useMachine(
    FetchMachine
    .provide({
      actions: {
        fetchData: async () => {
          const requestOptions = { method: "GET", redirect: "follow"};
          try {
            const response = await fetch(apiLink, requestOptions);
            const data = await response.json();
            const cats = data.map(catObject);
            send({type: 'RESOLVE', results: cats});
            console.log(cats);
            console.log(cats[0]);
            console.log(cats[0].referenceImageID);
          } catch (error) {
            console.log(error)
          }
        }
      }
    }));

  useEffect(() => {
    if (queryPull === null) {
      state.context.results && state.context.results.map((obj) => setQueryPull(obj));
    }
  });

  const handleLeft = () => {
    if (index - 1 <= 0){
      setIndex(0);
    } else {
      setIndex(index - 1);
    }
  }

  const handleRight = () => {
    if (index + 1 >= state.context.results.length){
      setIndex(index);
    } else {
      setIndex(index + 1);
    }
  }


  return (
    <div>
      <button onClick={handleLeft}>
        ←
      </button>
      <button onClick={() => {send({type: 'FETCH'})}}>
          Fetch
      </button>
      <button onClick={handleRight}>
      →
      </button>
      <p className="read-the-docs">
        Current State: {state.value}.
      </p>
      {state.value == 'successful' && (
        <img style={{width: '200px', height: 'auto' }}src={state.context.results[index].imgURL} alt="Logo" />
      )}
      <p className="read-the-docs">
        Index: {index}  
      </p>

    </div>
  )

}

export default CatFetch;