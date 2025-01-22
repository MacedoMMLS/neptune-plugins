import type { CallbackFunction, DisposeFunction, StoreOptions, ArrayMaybe } from '../types';
type StoreKey = string | number | symbol;
type StoreReconcileable = Array<any> | Record<StoreKey, any>;
type StoreTarget = Record<StoreKey, any>;
type StoreSelectorFunction = () => void;
type StoreListenableTarget = StoreTarget | StoreSelectorFunction;
type StoreListenerRoots<T = unknown> = (roots: T[]) => void;
declare const store: {
    <T>(value: T, options?: StoreOptions): T;
    on(target: ArrayMaybe<StoreListenableTarget>, listener: CallbackFunction): DisposeFunction;
    _onRoots<K extends StoreKey, V extends unknown>(target: Record<K, V>, listener: StoreListenerRoots<V>): DisposeFunction;
    reconcile: <T_1 extends StoreReconcileable>(prev: T_1, next: T_1) => T_1;
    untrack<T_2>(value: T_2): T_2;
    unwrap<T_3>(value: T_3): T_3;
};
export default store;
