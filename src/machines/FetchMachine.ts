import { createMachine, assign } from "xstate"


export const FetchMachine = createMachine({
    id: 'fetchMachine',
    initial: 'idle',
    context: {
        results: [],
        message: ''
    },

    states:{
        idle: { on: {FETCH: 'pending'} },
        pending: {
            entry: ['fetchData'],
            on: { RESOLVE: {target: 'successful', actions: ['setResults']} }
        },
        failed: { on: {FETCH: 'pending'} },
        successful: { on: {FETCH: 'pending'} }
    }
}, {
    actions: {
        setResults: assign((context, event) => ({ results: context.event.results })),
        setMessage: assign(({event}) => ({ message: event.message }))
    }
});