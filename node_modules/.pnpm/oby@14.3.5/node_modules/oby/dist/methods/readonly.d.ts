import type { Observable, ObservableReadonly } from '../types';
declare const readonly: <T>(observable: Observable<T> | ObservableReadonly<T>) => ObservableReadonly<T>;
export default readonly;
