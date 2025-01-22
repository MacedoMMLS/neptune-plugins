import type { WrappedDisposableFunction } from '../types';
declare const root: <T>(fn: WrappedDisposableFunction<T>) => T;
export default root;
