import { AllLanguages } from "@nuclenergy/t";
import { TConfig } from "@nuclenergy/t/dist/tconfig";

const config = {
  languages: {
    name: "en",
    children: [
      {
        name: "zh",
      },
      {
        name: "es",
      },
    ],
  },
  targets: [
    {
      includes: ["/"],
      excludes: ["node_modules", ".*"],
      output: "_t",
      fnNames: ["t"],
    },
  ],
} as const satisfies TConfig;

export type Language = AllLanguages<typeof config>;

export default config;
