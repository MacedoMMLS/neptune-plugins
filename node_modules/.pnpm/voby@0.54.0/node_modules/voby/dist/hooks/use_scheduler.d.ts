import type { Disposer, FN, FunctionMaybe, ObservableMaybe } from '../types';
declare const useScheduler: <T, U>({ loop, once, callback, cancel, schedule }: {
    loop?: FunctionMaybe<boolean> | undefined;
    once?: boolean | undefined;
    callback: ObservableMaybe<FN<[U], void>>;
    cancel: FN<[T], void>;
    schedule: (callback: FN<[U], void>) => T;
}) => Disposer;
export default useScheduler;
