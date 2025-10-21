import React from "react";

const PARAM_REGEX = /\{\{(.+?)\}\}/g;

export const renderTemplate = (
  template: string,
  vars: Record<string, React.ReactNode>
): string | React.ReactNode => {
  const result: React.ReactNode[] = [];
  let lastIndex = 0;

  template.replace(PARAM_REGEX, (match, key, offset) => {
    if (lastIndex < offset) {
      result.push(template.slice(lastIndex, offset));
    }

    const value = vars[key];
    if (value !== undefined) {
      result.push(
        React.isValidElement(value) ? React.cloneElement(value, { key }) : value
      );
    } else {
      console.warn(`Missing value for variable: ${key}`);
      result.push(`[${key}]`);
    }

    lastIndex = offset + match.length;
    return match;
  });

  if (lastIndex < template.length) {
    result.push(template.slice(lastIndex));
  }

  // Merge adjacent strings to minimize React's separator artifacts in HTML output
  const merged: React.ReactNode[] = [];
  for (const node of result) {
    const last = merged[merged.length - 1];
    if (typeof last === "string" && typeof node === "string") {
      merged[merged.length - 1] = (last as string) + node;
    } else {
      merged.push(node);
    }
  }

  if (merged.length === 0) {
    return "";
  }

  if (merged.every((n) => typeof n === "string")) {
    return merged.join("");
  }

  if (merged.length === 1) {
    return merged[0]!;
  }

  return React.createElement(React.Fragment, null, ...merged);
};
