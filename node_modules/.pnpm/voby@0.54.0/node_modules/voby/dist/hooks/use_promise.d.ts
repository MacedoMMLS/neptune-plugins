import type { FunctionMaybe, Resource } from '../types';
declare const usePromise: <T>(promise: FunctionMaybe<Promise<T>>) => Resource<T>;
export default usePromise;
