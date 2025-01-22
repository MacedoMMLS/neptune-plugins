import type { DirectiveFunction, Directive, DirectiveOptions, ExtractArray } from '../types';
declare const createDirective: <T extends keyof JSX.Directives>(name: T, fn: DirectiveFunction<Extract<JSX.Directives[T], unknown[]>>, options?: DirectiveOptions) => Directive<Extract<JSX.Directives[T], unknown[]>>;
export default createDirective;
