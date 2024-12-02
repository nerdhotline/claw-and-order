import { useMachine } from '@xstate/react'
import { fetchMachine } from './machines/FetchMachine.ts'
import { catObject, apiLink } from './utility/Constants';
import { useState, useEffect } from 'react';

function CatFetch() {
  // const [count, setCount] = useState(0);

  // const identity = () => {
  //   setCount(count);
  // }

  const [queryPull, setQueryPull] = useState(null);
  const [state, send] = useMachine(
    fetchMachine
    .provide({
      actions: {
        fetchData: async (context, event) => {
          const requestOptions = { method: "GET", redirect: "follow"};
          try {
            const response = await fetch(apiLink, requestOptions);
            const data = await response.json();
            const temp = data.map(catObject);
            send({type: 'RESOLVE', results: temp});
            console.log(temp);
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
  })

  return (
    <div>
      <button onClick={() => {send({type: 'FETCH'})}}>
          Fetch
      </button>
      <p>
        Test
      </p>
    </div>
  )

}

export default CatFetch;