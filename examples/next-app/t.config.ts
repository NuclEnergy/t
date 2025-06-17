import { AllLanguages } from "@nuclenergy/t";
import { TConfig } from "@nuclenergy/t/tconfig";

const config = {
  languages: {
    name: "en",
    children: [
      {
        name: "zh",
        children: [
          {
            name: "zh-Hans",
            children: [
              {
                name: "zh-CN",
              },
              {
                name: "zh-MY",
              },
            ],
          },
          {
            name: "zh-Hant",
            children: [
              {
                name: "zh-HK",
              },
              {
                name: "zh-TW",
              },
              {
                name: "zh-MO",
              },
            ],
          },
        ],
      },
      {
        name: "es",
        children: [
          {
            name: "es-ES",
          },
          {
            name: "es-MX",
          },
        ],
      },
    ],
  },
  targets: [
    {
      includes: ["/app"],
      excludes: ["node_modules", ".*"],
      output: "_t",
      fnNames: ["t"],
    },
  ],
} as const satisfies TConfig;

export type Language = AllLanguages<typeof config>;

export default config;
