import type { SelectorFunction } from '../types';
declare const selector: <T>(source: () => T) => SelectorFunction<T>;
export default selector;
