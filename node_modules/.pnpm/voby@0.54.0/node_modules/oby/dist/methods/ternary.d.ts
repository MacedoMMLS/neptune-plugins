import type { ObservableReadonly, FunctionMaybe, Resolved } from '../types';
declare const ternary: <T, F>(when: FunctionMaybe<unknown>, valueTrue: T, valueFalse: F) => ObservableReadonly<T | F>;
export default ternary;
