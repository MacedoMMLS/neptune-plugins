import type { Child, FunctionMaybe, ObservableReadonly } from '../types';
declare const Suspense: ({ when, fallback, children }: {
    when?: FunctionMaybe<unknown>;
    fallback?: Child;
    children: Child;
}) => ObservableReadonly<Child>;
export default Suspense;
