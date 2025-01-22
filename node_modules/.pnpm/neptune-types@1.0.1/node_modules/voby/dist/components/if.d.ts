import type { Child, FunctionMaybe, ObservableReadonly, Truthy } from '../types';
declare const If: <T>({ when, fallback, children }: {
    when: FunctionMaybe<T>;
    fallback?: Child;
    children: Child | ((value: () => Exclude<T, false | void | "" | 0 | 0n | null | undefined>) => Child);
}) => ObservableReadonly<Child>;
export default If;
