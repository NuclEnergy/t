# T

A translation function library for your projects.

## Features

- 🚀 Type-safe translations
- 🔧 First-class TypeScript support
- 📦 CLI-powered workflow
- 🛠️ Perfectly compatible with Next.js 15 App Router

## Installation

```bash
pnpm add @nuclenergy/t
```

## Install the T-CLI tool (optional, but recommended)

> **Note**
>
> The CLI tool ([`t-cli`](https://github.com/NuclEnergy/t-cli.git)) is **not** included in this repository. It is a separate project.  
> You need to clone and build it yourself, as no binary releases are provided for now. Please ensure you have a suitable build environment before proceeding.

## Quick Start

### 1. Create a config file

Create a `t.config.ts` file in your project root:

```typescript
import { TConfig } from "@nuclenergy/t/tconfig";

const config = {
  languages: {
    name: "en",
    children: [{ name: "zh" }, { name: "es" }],
  },
  targets: [
    {
      includes: ["/src"],
      excludes: ["node_modules", ".*"],
      output: "_t",
      fnNames: ["t"],
    },
  ],
} as const satisfies TConfig;

export type Language = AllLanguages<typeof config>;
export default config;
```

---

### 2. Usage

You can use the following object temporarily. The `t-cli` tool will automatically collect all translation keys.

```typescript
import { t } from "@nuclenergy/t/macros";
```

#### TypeScript/Node

```typescript
import { t } from "@nuclenergy/t/macros";

function main() {
  return t("Hello, World!");
}
```

#### React/Next.js (App Router)

```tsx
import { t } from "@nuclenergy/t/macros";

export default async function App() {
  return <h1>{t("Hello, World!")}</h1>;
}
```

### 3. Define translation files

Use the CLI to collect all translation keys:

```bash
t-cli collect
```

This command will generate a `_t` directory within the target directory and create the corresponding translation files.
You can use AI tools or translate manually. For example, the result may look like this:

```json
// src/_t/en.json
{
  "Hello, World!": "Hello, World!"
}

// src/_t/zh.json
{
  "Hello, World!": "你好，世界！"
}

// src/_t/es.json
{
  "Hello, World!": "¡Hola, Mundo!"
}
```

---

### 4. Generate `index.ts` File

Generate the final file using the command below:

```bash
t-cli generate
```

The result will look like this:

```typescript
// src/_t/index.ts
export const _t = {
  en: { "Hello, World!": "Hello, World!" },
  zh: { "Hello, World!": "你好，世界！" },
  es: { "Hello, World!": "¡Hola, Mundo!" },
} as const;

// Optionally, you can define a type to constrain the key-value pairs of the translations.
export type Dict = (typeof _t)[keyof typeof _t];
```

---

### 5. Replace the temporary object with the generated file

As this project is still under development, the replacement functionality is not fully automated yet; you need to replace it manually.

Replace this line:

```typescript
import { t } from "@nuclenergy/t/macros";
```

With:

```typescript
import { createT } from "@nuclenergy/t";
import { _t } from "./_t";

const t = createT(_t[lang]);
```

Here is the final code example:

#### TypeScript/Node

```typescript
import { createT } from "@nuclenergy/t";
import { _t } from "./_t";
import { Language } from "../t.config";

function main() {
  const lang: Language = "en";
  const t = createT(_t[lang]);
  return t("Hello, World!");
}
```

#### React/Next.js (App Router)

```tsx
import { createT } from "@nuclenergy/t";
import { _t } from "./_t";
import { Language } from "../t.config";

async function App({
  searchParams,
}: {
  searchParams: Promise<{ lang: Language }>;
}) {
  const { lang = "en" } = await searchParams;
  const t = createT(_t[lang]);
  return <h1>{t("Hello, World!")}</h1>;
}
```

Note:
Language detection and management are not provided out-of-the-box to avoid extra dependencies; you need to implement language selection logic yourself.

## FAQ

- **How to add a new language?**  
  Update `t.config.ts` and add the corresponding `.json` file under `src/_t`. Run CLI tools to sync.

- **How to collect and generate all translation keys?**  
  Use `t-cli collect` to find all keys, then `t-cli generate` to update files.

---

## Examples

- [Basic](https://github.com/NuclEnergy/t/tree/main/examples/basic)
- [Next.js](https://github.com/NuclEnergy/t/tree/main/examples/next-app)

## License

MIT. See [LICENSE](LICENSE) for details.
