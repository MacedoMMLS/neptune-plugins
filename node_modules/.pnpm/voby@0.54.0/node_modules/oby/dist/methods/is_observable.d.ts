import type { Observable, ObservableReadonly } from '../types';
declare const isObservable: <T = unknown>(value: unknown) => value is Observable<T> | ObservableReadonly<T>;
export default isObservable;
