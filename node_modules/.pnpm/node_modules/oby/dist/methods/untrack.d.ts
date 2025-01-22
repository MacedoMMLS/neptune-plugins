import type { FunctionMaybe, UntrackFunction } from '../types';
declare function untrack<T>(fn: FunctionMaybe<T>): T;
declare function untrack<T>(fn: UntrackFunction<T>): T;
declare function untrack<T>(fn: T): T;
export default untrack;
