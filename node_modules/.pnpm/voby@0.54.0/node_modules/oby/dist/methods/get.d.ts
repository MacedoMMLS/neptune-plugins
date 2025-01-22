import type { FunctionMaybe, ObservableReadonly } from '../types';
declare function get<T>(value: FunctionMaybe<T>, getFunction?: true): T;
declare function get<T>(value: T, getFunction: false): T extends ObservableReadonly<infer U> ? U : T;
export default get;
