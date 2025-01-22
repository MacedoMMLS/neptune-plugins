import type { MapFunction, MapValueFunction, ObservableReadonly, FunctionMaybe, Resolved } from '../types';
declare function _for<T, R, F>(values: FunctionMaybe<readonly T[]> | undefined, fn: MapFunction<T, R>, fallback?: F | [], options?: {
    pooled?: false;
    unkeyed?: false;
}): ObservableReadonly<Resolved<R>[] | Resolved<F>>;
declare function _for<T, R, F>(values: FunctionMaybe<readonly T[]> | undefined, fn: MapValueFunction<T, R>, fallback?: F | [], options?: {
    pooled?: boolean;
    unkeyed?: true;
}): ObservableReadonly<Resolved<R>[] | Resolved<F>>;
export default _for;
