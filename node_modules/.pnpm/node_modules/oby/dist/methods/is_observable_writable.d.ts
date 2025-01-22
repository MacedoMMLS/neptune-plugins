import type { Observable } from '../types';
declare const isObservableWritable: <T = unknown>(value: unknown) => value is Observable<T>;
export default isObservableWritable;
