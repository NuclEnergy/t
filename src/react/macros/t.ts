import { renderTemplate } from "../render";
import { VarsFor } from "../types";

export const t = <K extends string>(key: K, ...args: VarsFor<K>): string => {
  const vars = args[0];
  if (vars) {
    return `[${renderTemplate(key, vars)}]`;
  }
  return `[${key}]`;
};
