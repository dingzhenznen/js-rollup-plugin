# js-rollup-demo

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
