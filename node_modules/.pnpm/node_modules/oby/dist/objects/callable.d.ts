import type { IObservable, Observable, ObservableReadonly } from '../types';
declare const frozen: <T>(value: T) => ObservableReadonly<T>;
declare const readable: <T>(value: import("./observable").default<T>) => ObservableReadonly<T>;
declare const writable: <T>(value: import("./observable").default<T>) => Observable<T>;
export { frozen, readable, writable };
