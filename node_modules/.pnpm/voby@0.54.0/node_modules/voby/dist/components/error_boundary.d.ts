import type { Callback, Child, FN, ObservableReadonly } from '../types';
declare const ErrorBoundary: ({ fallback, children }: {
    fallback: Child | FN<[{
        error: Error;
        reset: Callback;
    }], Child>;
    children: Child;
}) => ObservableReadonly<Child>;
export default ErrorBoundary;
