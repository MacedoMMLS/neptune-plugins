import type { IObserver, EqualsFunction, UpdateFunction, ObservableOptions } from '../types';
declare class Observable<T = unknown> {
    parent?: IObserver;
    value: T;
    equals?: EqualsFunction<T>;
    observers: Set<IObserver>;
    constructor(value: T, options?: ObservableOptions<T>, parent?: IObserver);
    get(): T;
    set(value: T): T;
    stale(status: number): void;
    update(fn: UpdateFunction<T>): T;
}
export default Observable;
