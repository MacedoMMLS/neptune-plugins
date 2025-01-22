import type { BatchFunction } from '../types';
declare const batch: <T>(fn: BatchFunction<T>) => Promise<Awaited<T>>;
export default batch;
