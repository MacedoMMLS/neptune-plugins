import type { MemoFunction, MemoOptions, ObservableReadonly } from '../types';
declare const memo: <T>(fn: MemoFunction<T>, options?: MemoOptions<T | undefined> | undefined) => ObservableReadonly<T>;
export default memo;
