import type { IObservable, Observable, ObservableReadonly } from '../types';
declare const target: <T>(observable: Observable<T> | ObservableReadonly<T> | import("../objects/observable").default<T>) => import("../objects/observable").default<T>;
export default target;
