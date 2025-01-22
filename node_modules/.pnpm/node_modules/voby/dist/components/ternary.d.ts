import type { Child, FunctionMaybe, ObservableReadonly } from '../types';
declare const Ternary: ({ when, children }: {
    when: FunctionMaybe<unknown>;
    children: [Child, Child];
}) => ObservableReadonly<Child>;
export default Ternary;
