import type { SuspenseFunction, FunctionMaybe } from '../types';
declare const suspense: <T>(when: FunctionMaybe<unknown>, fn: SuspenseFunction<T>) => T;
export default suspense;
