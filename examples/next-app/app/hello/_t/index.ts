export const _t = {
  "en": {
    "Good morning": "Good morning",
    "Hello, World!": "Hello, World!"
  },
  "es": {
    "Good morning": "Buenos días",
    "Hello, World!": "¡Hola, Mundo!"
  },
  "es-ES": {
    "Good morning": "Buenos días",
    "Hello, World!": "¡Hola, Mundo!"
  },
  "es-MX": {
    "Good morning": "Buenos días",
    "Hello, World!": "¡Hola, Mundo!"
  },
  "zh": {
    "Good morning": "早上好",
    "Hello, World!": "你好，世界！"
  },
  "zh-CN": {
    "Good morning": "早上好",
    "Hello, World!": "你好，世界！"
  },
  "zh-HK": {
    "Good morning": "早上好",
    "Hello, World!": "你好，世界！"
  },
  "zh-Hans": {
    "Good morning": "早上好",
    "Hello, World!": "你好，世界！"
  },
  "zh-Hant": {
    "Good morning": "早上好",
    "Hello, World!": "你好，世界！"
  },
  "zh-MO": {
    "Good morning": "早上好",
    "Hello, World!": "你好，世界！"
  },
  "zh-MY": {
    "Good morning": "早上好",
    "Hello, World!": "你好，世界！"
  },
  "zh-TW": {
    "Good morning": "早上好",
    "Hello, World!": "你好，世界！"
  }
} as const;

export type Dict = typeof _t[keyof typeof _t];
