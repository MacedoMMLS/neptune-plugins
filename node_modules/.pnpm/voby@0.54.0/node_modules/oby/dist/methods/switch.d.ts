import type { ObservableReadonly, FunctionMaybe, Resolved } from '../types';
declare function _switch<T, R>(when: FunctionMaybe<T>, values: [...[T, R][], [R]], fallback?: undefined): ObservableReadonly<Resolved<R>>;
declare function _switch<T, R, F>(when: FunctionMaybe<T>, values: [...[T, R][], [R]], fallback: F): ObservableReadonly<Resolved<R>>;
declare function _switch<T, R>(when: FunctionMaybe<T>, values: [T, R][], fallback?: undefined): ObservableReadonly<Resolved<R | undefined>>;
declare function _switch<T, R, F>(when: FunctionMaybe<T>, values: [T, R][], fallback: F): ObservableReadonly<Resolved<R | F>>;
export default _switch;
