import { Dictionary, VarsFor } from "./types";
import { renderTemplate } from "./render";

export const createT = <D extends Dictionary>(dictionary: D) => {
  const t = <K extends keyof D>(
    key: K,
    ...args: VarsFor<K>
  ): string | React.ReactNode => {
    const vars = args[0];
    let value = dictionary[key];

    if (typeof value !== "string") {
      console.warn(`Invalid value for key: ${String(key)}`);
      return `[${String(key)}]`;
    }
    if (vars) {
      return renderTemplate(value, vars);
    }
    return value;
  };

  return t;
};

export * from "./types";
export * from "../utils";
