import type { ObservableOptions, Observable } from '../types';
declare function observable<T>(): Observable<T | undefined>;
declare function observable<T>(value: undefined, options?: ObservableOptions<T | undefined>): Observable<T | undefined>;
declare function observable<T>(value: T, options?: ObservableOptions<T>): Observable<T>;
export default observable;
