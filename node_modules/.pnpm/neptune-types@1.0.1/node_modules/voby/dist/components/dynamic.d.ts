import type { Child, Component, FunctionMaybe } from '../types';
declare const Dynamic: <P = {}>({ component, props, children }: {
    component: Component<P>;
    props?: FunctionMaybe<P | null> | undefined;
    children?: Child;
}) => Child;
export default Dynamic;
