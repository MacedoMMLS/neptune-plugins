import { ObservablesArray, ObservablesSet } from './observables';
import Owner from './owner';
import type { IOwner, ObserverFunction, Contexts } from '../types';
declare class Observer extends Owner {
    parent: IOwner;
    context: Contexts;
    status: number;
    observables: ObservablesArray | ObservablesSet;
    sync?: boolean;
    constructor();
    dispose(deep: boolean): void;
    refresh<T>(fn: ObserverFunction<T>): T;
    run(): void;
    stale(status: number): void;
    update(): void;
}
export default Observer;
