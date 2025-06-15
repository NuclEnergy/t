export type TConfig = {
  languages: LanguageNode;
  targets: Target[];
};

export type LanguageNode = {
  name: string;
  children?: LanguageNode[];
};

export type Target = {
  includes: string[];
  excludes: string[];
  output: string;
  fnNames: string[];
};
