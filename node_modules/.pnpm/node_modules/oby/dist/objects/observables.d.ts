import type { IObservable, IObserver } from '../types';
declare class ObservablesArray {
    observer: IObserver;
    observables: IObservable[];
    observablesIndex: number;
    constructor(observer: IObserver);
    dispose(deep: boolean): void;
    postdispose(): void;
    empty(): boolean;
    has(observable: IObservable<any>): boolean;
    link(observable: IObservable<any>): void;
    update(): void;
}
declare class ObservablesSet {
    observer: IObserver;
    observables: Set<IObservable>;
    constructor(observer: IObserver, observables: IObservable[]);
    dispose(deep: boolean): void;
    postdispose(): void;
    empty(): boolean;
    has(observable: IObservable): boolean;
    link(observable: IObservable<any>): void;
    update(): void;
}
export { ObservablesArray, ObservablesSet };
