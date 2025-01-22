import Root from '../objects/root';
import type { IObservable, MapFunction, Resolved } from '../types';
declare class MappedRoot<T = unknown> extends Root {
    bool?: boolean;
    index?: IObservable<number>;
    result?: T;
}
declare class CacheKeyed<T, R> {
    private parent;
    private suspense;
    private fn;
    private fnWithIndex;
    private cache;
    private bool;
    private prevCount;
    private reuseCount;
    private nextCount;
    constructor(fn: MapFunction<T, R>);
    cleanup: () => void;
    dispose: () => void;
    before: () => void;
    after: (values: readonly T[]) => void;
    map: (values: readonly T[]) => Resolved<R>[];
    roots: () => MappedRoot<R>[];
}
export default CacheKeyed;
