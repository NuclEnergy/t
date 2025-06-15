import { LanguageNode, TConfig } from "./tconfig";

export type Dictionary = { [key: string]: string | Dictionary };

export type TranslationFunction<T extends Dictionary> = <K extends keyof T>(
  key: K,
  vars?: Record<string, string | number>
) => string;

export type Dictionaries<T extends TConfig> = {
  [lang in ExtractLanguages<T["languages"]>]: Dictionary;
};

type ExtractLanguages<T> = T extends {
  name: infer Name;
  children?: infer Children;
}
  ? Name extends string
    ? Children extends LanguageNode[]
      ? Name | ExtractLanguagesFromArray<Children>
      : Name
    : never
  : never;

type ExtractLanguagesFromArray<T extends LanguageNode[]> = T extends [
  infer Head,
  ...infer Tail
]
  ?
      | ExtractLanguages<Head>
      | (Tail extends LanguageNode[] ? ExtractLanguagesFromArray<Tail> : never)
  : never;

export type AllLanguages<T extends TConfig> = ExtractLanguages<
  T["languages"]
>;

export type ExtractVars<T> = T extends string
  ? T extends `${infer _Start}{{${infer Var}}}${infer Rest}`
    ? Var | ExtractVars<Rest>
    : never
  : never;

export type VarsFor<T> = ExtractVars<T> extends never
  ? []
  : [vars: Record<ExtractVars<T>, string | number>];
