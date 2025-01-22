import type { Resolvable, Resolved } from '../types';
declare function resolve<T>(value: T): T extends Resolvable ? Resolved<T> : never;
export default resolve;
