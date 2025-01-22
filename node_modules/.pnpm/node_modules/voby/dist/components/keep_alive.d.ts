import type { Child, FunctionMaybe, ObservableReadonly } from '../types';
declare const KeepAlive: ({ id, ttl, children }: {
    id: FunctionMaybe<string>;
    ttl?: FunctionMaybe<number> | undefined;
    children: Child;
}) => ObservableReadonly<Child>;
export default KeepAlive;
