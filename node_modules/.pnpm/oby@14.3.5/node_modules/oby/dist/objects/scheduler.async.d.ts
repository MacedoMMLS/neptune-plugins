import type { IEffect } from '../types';
declare class Scheduler {
    waiting: IEffect[];
    locked: boolean;
    queued: boolean;
    flush: () => void;
    queue: () => void;
    resolve: () => void;
    schedule: (effect: IEffect) => void;
}
declare const _default: Scheduler;
export default _default;
