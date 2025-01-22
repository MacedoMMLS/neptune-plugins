import type { IObserver } from '../types';
declare class Scheduler {
    waiting: IObserver[];
    counter: number;
    locked: boolean;
    flush: () => void;
    wrap: (fn: () => void) => void;
    schedule: (observer: IObserver) => void;
}
declare const _default: Scheduler;
export default _default;
