import Observer from './observer';
import type { IObservable, MemoFunction, MemoOptions } from '../types';
declare class Memo<T = unknown> extends Observer {
    fn: MemoFunction<T>;
    observable: IObservable<T>;
    sync?: boolean;
    constructor(fn: MemoFunction<T>, options?: MemoOptions<T>);
    run(): void;
    stale(status: number): void;
}
export default Memo;
