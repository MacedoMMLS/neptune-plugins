import type { ContextFunction, Contexts } from '../types';
declare function context<T>(symbol: symbol): T | undefined;
declare function context<T>(context: Contexts, fn: ContextFunction<T>): T;
export default context;
