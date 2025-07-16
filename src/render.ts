const PARAM_REGEX = /\{\{(.+?)\}\}/g;

export const renderTemplate = (
  template: string,
  vars: Record<string, string | number>
): string => {
  return template.replace(PARAM_REGEX, (_, key) => {
    if (key in vars) {
      return vars[key] as string;
    } else {
      console.warn(`Missing value for variable: ${key}`);
      return `[${key}]`;
    }
  });
};
