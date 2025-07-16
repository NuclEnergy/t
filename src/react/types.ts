import { ExtractVars } from "../types";
export * from "../types";

export type VarsFor<T> = ExtractVars<T> extends never
  ? []
  : [vars: Record<ExtractVars<T>, React.ReactNode>];
