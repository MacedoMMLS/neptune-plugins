import type { CleanupFunction, Callable } from '../types';
declare const cleanup: (fn: Callable<CleanupFunction>) => void;
export default cleanup;
