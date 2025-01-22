import type { TryCatchFunction, ObservableReadonly, Resolved } from '../types';
declare const tryCatch: <T, F>(value: T, fn: TryCatchFunction<F>) => ObservableReadonly<T | F>;
export default tryCatch;
