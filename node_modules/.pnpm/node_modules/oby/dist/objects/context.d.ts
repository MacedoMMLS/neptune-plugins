import Owner from './owner';
import type { IOwner, ContextFunction, Contexts } from '../types';
declare class Context extends Owner {
    parent: IOwner;
    context: Contexts;
    constructor(context: Contexts);
    wrap<T>(fn: ContextFunction<T>): T;
}
export default Context;
