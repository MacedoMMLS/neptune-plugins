import type { ObservableMaybe, PromiseMaybe, Resource } from '../types';
declare const useResource: <T>(fetcher: () => ObservableMaybe<PromiseMaybe<T>>) => Resource<T>;
export default useResource;
