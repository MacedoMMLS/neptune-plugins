import type { LazyArray, LazySet } from './types';
declare const lazyArrayEach: <T>(arr: LazyArray<T>, fn: (value: T) => void) => void;
declare const lazyArrayEachRight: <T>(arr: LazyArray<T>, fn: (value: T) => void) => void;
declare const lazyArrayPush: <T, U extends string>(obj: Partial<Record<U, LazyArray<T>>>, key: U, value: T) => void;
declare const lazySetAdd: <T, U extends string>(obj: Partial<Record<U, LazySet<T>>>, key: U, value: T) => void;
declare const lazySetDelete: <T, U extends string>(obj: Partial<Record<U, LazySet<T>>>, key: U, value: T) => void;
declare const lazySetEach: <T>(set: LazySet<T>, fn: (value: T) => void) => void;
export { lazyArrayEach, lazyArrayEachRight, lazyArrayPush };
export { lazySetAdd, lazySetDelete, lazySetEach };
