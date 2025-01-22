import type { SYMBOL_SUSPENSE } from '../symbols';
import type { IContext, IObserver, IOwner, IRoot, ISuperRoot, ISuspense, CleanupFunction, ErrorFunction, WrappedFunction, Callable, Contexts, LazyArray, LazySet, LazyValue } from '../types';
declare class Owner {
    parent?: IOwner;
    context?: Contexts;
    disposed: boolean;
    cleanups: LazyArray<Callable<CleanupFunction>>;
    errorHandler: LazyValue<ErrorFunction>;
    contexts: LazyArray<IContext>;
    observers: LazyArray<IObserver>;
    roots: LazySet<IRoot | (() => IRoot[])>;
    suspenses: LazyArray<ISuspense>;
    catch(error: Error, silent: boolean): boolean;
    dispose(deep: boolean): void;
    get(symbol: typeof SYMBOL_SUSPENSE): ISuspense | undefined;
    get(symbol: symbol): any;
    wrap<T>(fn: WrappedFunction<T>, owner: IContext | IObserver | IRoot | ISuperRoot | ISuspense, observer: IObserver | undefined): T;
}
export default Owner;
