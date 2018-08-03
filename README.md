# @ecomfe/eslint-config

EFE团队使用的`eslint`配置。

## 使用方式

在`.eslintrc.json`中使用：

```json
{
    "extends": "@ecomfe/eslint-config"
}
```

也可开启严格模式：

```json
{
    "extends": "@ecomfe/eslint-config/strict"
}
```

## 扩展

你可以自行安装`eslint-plugin-react`及`eslint-plugin-import`这两个插件来启用对应的规则，仅安装即可，不需要额外配置。

## 细节

默认配置`index.js`与[fecs](https://github.com/ecomfe/fecs)相同，但临时移除了`fecs-*`的规则。

严格版配置`strict.js`开启了更严格的规则，也会有更为活跃的变化（如引入新的插件等）。

当前`index.js`与`strict.js`并没有完全同步，但两者均有很高的可用性。
