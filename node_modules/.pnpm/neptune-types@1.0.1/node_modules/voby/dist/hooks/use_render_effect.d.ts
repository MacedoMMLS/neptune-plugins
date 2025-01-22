import type { Disposer, EffectFunction } from '../types';
declare const useRenderEffect: (fn: EffectFunction) => Disposer;
export default useRenderEffect;
