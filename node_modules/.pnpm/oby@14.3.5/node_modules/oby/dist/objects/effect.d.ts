import Observer from './observer';
import type { ISuspense, EffectFunction, EffectOptions } from '../types';
declare class Effect extends Observer {
    fn: EffectFunction;
    suspense?: ISuspense;
    init?: true;
    sync?: true;
    constructor(fn: EffectFunction, options?: EffectOptions);
    run(): void;
    schedule(): void;
    stale(status: number): void;
    update(): void;
}
export default Effect;
