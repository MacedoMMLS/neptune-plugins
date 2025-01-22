import Owner from './owner';
import type { IObservable, IOwner, SuspenseFunction, Contexts } from '../types';
declare class Suspense extends Owner {
    parent: IOwner;
    context: Contexts;
    observable?: IObservable<boolean>;
    suspended: number;
    constructor();
    toggle(force: boolean): void;
    wrap<T>(fn: SuspenseFunction<T>): T;
}
export default Suspense;
