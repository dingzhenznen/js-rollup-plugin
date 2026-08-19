# js-rollup-demo

## 构建

项目使用 TypeScript 编写入口文件 `src/main.ts`，并通过 Rollup 输出 ES Module 和 CommonJS 两种格式：

```bash
pnpm build
```

构建产物为：

- `dist/index.esm.js`：ES Module 格式
- `dist/index.cjs`：CommonJS 格式
- `dist/types/index.d.ts`：TypeScript 类型声明文件

## 模块入口配置

项目通过 `package.json` 中的以下字段声明不同模块系统的入口文件：

- `exports`：现代、明确的入口配置，可根据 `import` 和 `require` 选择对应文件，推荐使用。
- `main`：CommonJS 兼容配置，通常用于 `require()` 导入。
- `module`：ES Module 入口配置，主要供部分打包工具识别和使用。

当前配置如下：

```json
{
  "main": "dist/index.cjs",
  "module": "dist/index.esm.js",
  "exports": {
    ".": {
      "import": "./dist/index.esm.js",
      "require": "./dist/index.cjs"
    }
  }
}
```

使用 ES Module：

```js
import { fibonacci } from 'js-rollup-demo';

console.log(fibonacci(10)); // 55
```

使用 CommonJS：

```js
const { fibonacci } = require('js-rollup-demo');

console.log(fibonacci(10)); // 55
```
