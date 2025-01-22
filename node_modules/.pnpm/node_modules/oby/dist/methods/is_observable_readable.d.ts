import type { ObservableReadonly } from '../types';
declare const isObservableReadable: <T = unknown>(value: unknown) => value is ObservableReadonly<T>;
export default isObservableReadable;
