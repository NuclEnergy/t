export const _t = {
  "en": {
    "Hello, World!": "Hello, World!"
  },
  "es": {
    "Hello, World!": "Hola, Mundo!"
  },
  "zh": {
    "Hello, World!": "你好，世界！"
  }
} as const;

export type Dict = typeof _t[keyof typeof _t];
