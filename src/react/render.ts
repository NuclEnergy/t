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

  return result;
};
