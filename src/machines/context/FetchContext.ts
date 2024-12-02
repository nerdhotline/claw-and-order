import { createActorContext } from '@xstate/react';
import { FetchMachine } from '../FetchMachine';

const FetchContext = createActorContext(FetchMachine);

export default FetchContext;
