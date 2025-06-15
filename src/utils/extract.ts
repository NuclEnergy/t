import { LanguageNode, TConfig } from "../tconfig";
import { AllLanguages } from "../types";

export const extract_languages_from_config = <T extends TConfig>(
  config: T
): AllLanguages<T>[] => {
  return collect_languages(config.languages) as AllLanguages<T>[];
};

const collect_languages = (node: LanguageNode) => {
  let result: string[] = [];
  collect_recursive(node, result);
  return result;
};

const collect_recursive = (node: LanguageNode, result: string[]) => {
  result.push(node.name);
  node.children?.forEach((child) => collect_recursive(child, result));
};
