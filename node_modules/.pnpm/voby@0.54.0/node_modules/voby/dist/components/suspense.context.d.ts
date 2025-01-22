import type { SuspenseData } from '../types';
declare const SuspenseContext: {
    create: () => SuspenseData;
    get: () => SuspenseData | undefined;
    wrap: <T>(fn: (data: SuspenseData) => T) => (() => T) extends infer T_1 ? T_1 extends () => T ? T_1 extends import("oby/dist/types").Resolvable ? T_1 : never : never : never;
};
export default SuspenseContext;
