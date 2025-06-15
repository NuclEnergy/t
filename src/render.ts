const PARAM_REGEX = /\{\{(\w+)\}\}/g;

export const renderTemplate = (
  template: string,
  vars: Record<string, string | number>
): string => {
  return template.replace(PARAM_REGEX, (_, key) => {
    if (key in vars) {
      const value = vars[key].toString();
      return value;
    } else {
      console.warn(`Missing value for variable: ${key}`);
      return `#${key}`;
    }
  });
};
