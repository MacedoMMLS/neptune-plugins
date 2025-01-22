import type { ObservableReadonly, FunctionMaybe, Resolved } from '../types';
declare function _if<T>(when: FunctionMaybe<unknown>, valueTrue: T, valueFalse?: undefined): ObservableReadonly<Resolved<T | undefined>>;
declare function _if<T, F>(when: FunctionMaybe<unknown>, valueTrue: T, valueFalse: F): ObservableReadonly<Resolved<T | F>>;
export default _if;
