# @ecomfe/eslint-config

EFE 团队使用的 ESLint 配置。

## 安装

```shell
npm i -D eslint @ecomfe/eslint-config
```

## 使用

**仅支持Flat Config格式的配置。**

在 `eslint.config.js` 中使用：

```js
import {configure, Options} from './dist/index.js';

const options = {
    strict: true,
    typeScript: {
        typeCheck: true,
    },
    import: {
        node: false,
        webpack: false,
    },
    react: {},
};
export default configure(options);
```

### 配置项

除`strict`外，其余选项均控制特写场景的规则，无该配置即完全禁用相关规则，你可以使用一个空对象（`{}`）表示按默认配置启用这一场景。

- `strict`：开启严格模式，会提升部分规则的约束。
- `typeScript`：配置TS相关规则。
  - `typeCheck`：是否启用需要类型的规则，这些规则速度较慢但能提高代码质量，默认为`true`。
- `import`：配置模块引入、导出相关规则。
  - `node`：是否Node项目，默认为`false`，即不允许使用Node原生模块。
  - `webpack`：是否为Webpack项目，默认为`false`，当打开时会检查动态`import`需要配置`webpckChunkName`等规则。
- `react`：是否启用React的相关规则。
