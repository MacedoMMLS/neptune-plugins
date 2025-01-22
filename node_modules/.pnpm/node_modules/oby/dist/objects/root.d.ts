import Owner from './owner';
import type { IOwner, WrappedDisposableFunction, Contexts } from '../types';
declare class Root extends Owner {
    parent: IOwner;
    context: Contexts;
    registered?: true;
    constructor(register: boolean);
    dispose(deep: boolean): void;
    wrap<T>(fn: WrappedDisposableFunction<T>): T;
}
export default Root;
