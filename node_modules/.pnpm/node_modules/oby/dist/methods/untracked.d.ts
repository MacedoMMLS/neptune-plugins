import type { UntrackedFunction } from '../types';
declare function untracked<Arguments extends unknown[], T>(fn: UntrackedFunction<Arguments, T>): ((...args: Arguments) => T);
declare function untracked<T>(fn: T): (() => T);
export default untracked;
