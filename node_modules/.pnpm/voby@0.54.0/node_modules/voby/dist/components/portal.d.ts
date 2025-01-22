import type { Child, ChildWithMetadata, FunctionMaybe } from '../types';
declare const Portal: ({ when, mount, wrapper, children }: {
    mount?: Child;
    when?: FunctionMaybe<boolean> | undefined;
    wrapper?: Child;
    children: Child;
}) => ChildWithMetadata<{
    portal: HTMLElement;
}>;
export default Portal;
