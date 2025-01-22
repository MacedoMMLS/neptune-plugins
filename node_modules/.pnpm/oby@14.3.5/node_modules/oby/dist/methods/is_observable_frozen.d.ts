import type { ObservableReadonly } from '../types';
declare const isObservableFrozen: <T = unknown>(value: unknown) => value is ObservableReadonly<T>;
export default isObservableFrozen;
