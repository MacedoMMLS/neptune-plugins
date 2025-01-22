import type { DisposeFunction, EffectFunction, EffectOptions } from '../types';
declare const effect: (fn: EffectFunction, options?: EffectOptions) => DisposeFunction;
export default effect;
