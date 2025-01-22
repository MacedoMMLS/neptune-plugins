import Root from '../objects/root';
import type { IObservable, MapValueFunction, Resolved } from '../types';
declare class MappedRoot<T = unknown, R = unknown> extends Root {
    index?: IObservable<number>;
    value?: IObservable<T>;
    suspended?: IObservable<boolean>;
    result?: R;
}
declare class CacheUnkeyed<T, R> {
    private parent;
    private suspense;
    private fn;
    private fnWithIndex;
    private cache;
    private pool;
    private poolMaxSize;
    private pooled;
    constructor(fn: MapValueFunction<T, R>, pooled: boolean);
    cleanup: () => void;
    dispose: () => void;
    map: (values: readonly T[]) => Resolved<R>[];
    roots: () => MappedRoot<T, R>[];
}
export default CacheUnkeyed;
