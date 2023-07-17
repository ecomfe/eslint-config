# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [7.5.1](https://github.com/ecomfe/eslint-config/compare/v7.5.0...v7.5.1) (2023-07-17)


### Bug Fixes

* 兼容新版typescript eslint删除no-duplicate-imports规则 ([d9910a0](https://github.com/ecomfe/eslint-config/commit/d9910a0310f0288b19d90a1e4368c8cd95ec2962))

## [7.5.0](https://github.com/ecomfe/eslint-config/compare/v7.4.0...v7.5.0) (2023-07-17)


### Features

* 兼容typescript-eslint 6.x版本 ([dbcc5f1](https://github.com/ecomfe/eslint-config/commit/dbcc5f11be703ae1108371965ecb4bc1211f92f6))

## [7.4.0](https://github.com/ecomfe/eslint-config/compare/v7.3.0...v7.4.0) (2022-01-01)


### Features

* support eslint 8 ([a6c07f4](https://github.com/ecomfe/eslint-config/commit/a6c07f4e8f0ee5ada8e4261d43f612201600c82e))
* update eslint-plugin-vue, add more rules and try resolving version from local package.json ([105dbfb](https://github.com/ecomfe/eslint-config/commit/105dbfb57fbee4a556031382a9b1779b03758adb))

## [7.3.0](https://github.com/ecomfe/eslint-config/compare/v7.2.1...v7.3.0) (2021-08-30)


### Features

* update san config and dependence ([f63f438](https://github.com/ecomfe/eslint-config/commit/f63f43887177f2bbef72100949b13ecc6ede0d30))


### Bug Fixes

* Typescript下禁用eslint quotes规则，使用@typescript-eslint/quotes替代 ([c4739fc](https://github.com/ecomfe/eslint-config/commit/c4739fc57b227213a0058f6c0b339e3a404796a5))

### [7.2.1](https://github.com/ecomfe/eslint-config/compare/v7.2.0...v7.2.1) (2021-08-10)


### Bug Fixes

* 在TS下关闭no-empty-function规则 ([fa1e4fd](https://github.com/ecomfe/eslint-config/commit/fa1e4fd3c958771f79458d1528f64f9e8b029b1f))
* 清理一些和默认规则重复的strict规则 ([5a361f9](https://github.com/ecomfe/eslint-config/commit/5a361f913f4c80d111524b4b0c9cf81047ab0d1a))

## [7.2.0](https://github.com/ecomfe/eslint-config/compare/v7.1.0...v7.2.0) (2021-08-04)


### Features

* turn off `vue/require-default-prop` ([529ab0b](https://github.com/ecomfe/eslint-config/commit/529ab0b4b5e52fb0e5e9c7696b39c29f344c11c7))
* 用TypeScript处理init-declarations ([dd33865](https://github.com/ecomfe/eslint-config/commit/dd33865225ff2bd8c22d29a24303ef96dc16e41e))


### Bug Fixes

* 允许命名函数表达式替代箭头函数 ([2fee3e4](https://github.com/ecomfe/eslint-config/commit/2fee3e45eeb3647cbc04d3f46ee92ac2624e80cb))
* 去除no-useless-constructor规则，避免与@typescript-eslint/no-useless-constructor规则冲突 ([ed9875a](https://github.com/ecomfe/eslint-config/commit/ed9875aedcfa945fef4be5c0f061c36bc1ca71c7)), closes [#56](https://github.com/ecomfe/eslint-config/issues/56)
* 禁用dot-notation规则，使用@typescript-eslint/dot-notation规则代替，兼容typescript noPropertyAccessFromIndexSignature配置 ([c30434f](https://github.com/ecomfe/eslint-config/commit/c30434fcd19fe8e07d71904d16acab988bb34b7f)), closes [#56](https://github.com/ecomfe/eslint-config/issues/56)
* 禁用no-redeclare,启用@typescript-eslint/no-redeclare，屏蔽ts下针对重复定义的错误判断 ([a472576](https://github.com/ecomfe/eslint-config/commit/a472576933cc013b5a97a3f58e6f6d1a5b9abba1)), closes [#56](https://github.com/ecomfe/eslint-config/issues/56)

## [7.1.0](https://github.com/ecomfe/eslint-config/compare/v7.0.0...v7.1.0) (2021-03-29)


### Features

* [max-len] ignore data uris ([8807dbe](https://github.com/ecomfe/eslint-config/commit/8807dbec9ea26b971e1a37830e7dbbc474948215))
* disable `direct-export` rule as using `defineComponent` is actually recommended ([011c0e2](https://github.com/ecomfe/eslint-config/commit/011c0e2689fb55c74afe43f9a6da2a2f4f5720f5))
* export helpers to get config for specific vue version ([#44](https://github.com/ecomfe/eslint-config/issues/44)) ([4813aaf](https://github.com/ecomfe/eslint-config/commit/4813aafd1d5dca9d5d72bbce5cf64721954678af))
* implement baidu/vue which honors baidu/default as base js rules ([376fa36](https://github.com/ecomfe/eslint-config/commit/376fa36df0ad16313de07059e0d028873c055b4e))
* ts检查中使用对ts更优的@typescript-eslint/no-duplicate-imports规则替换eslint no-duplicate-imports ([4ee4e50](https://github.com/ecomfe/eslint-config/commit/4ee4e50e3b91e458584a11008284cc0a62de921b))
* 优化react bind检查，dom元素不再强制bing ([8c3e26f](https://github.com/ecomfe/eslint-config/commit/8c3e26f88e22794a47fde055fe05ceaeb28bf96a))
* 升级react/jsx-wrap-multilines规则属性，严格模式下强制使用更严格parens-new-line写法, 强化检查 ([eec9665](https://github.com/ecomfe/eslint-config/commit/eec96655697debd40253f2815cb46f4e4e167968))
* 增加'no-unreachable-loop'规则([#33](https://github.com/ecomfe/eslint-config/issues/33)) ([4ad455e](https://github.com/ecomfe/eslint-config/commit/4ad455eacc54976657b6fbf64a0cfa9c3b044412))
* 增加no-extra-non-null-assertion规则 ([4991889](https://github.com/ecomfe/eslint-config/commit/4991889838d7284473d69d064cb1d4e4da7c786a))
* 增加经过async修饰过的箭头函数前添加空格的强制要求 ([2285708](https://github.com/ecomfe/eslint-config/commit/22857086d14757923ecbd2d2d4cd337ef9c41027))
* 更新react/jsx-tag-spacing rule, 增加beforeClosing规则 ([9c56efd](https://github.com/ecomfe/eslint-config/commit/9c56efd62d3fa4e9e51ca496dd3a46315fe2018c))
* 补充ts检查中丢失的对于重复类成员的检查 ([7c5a5ec](https://github.com/ecomfe/eslint-config/commit/7c5a5ecca76472ce0c09e6c0a397bf39ff27c1cc))
* **typescript/strict:** raise `no-floating-promises` to `error`; allow `void floatingPromise` in the form of `statement only pattern`; ([9a9fffb](https://github.com/ecomfe/eslint-config/commit/9a9fffb9ca58f09ec12dc1c485589ecc020b83a0))


### Bug Fixes

* make vue config work with typescript config ([c9a8cbd](https://github.com/ecomfe/eslint-config/commit/c9a8cbd4461da0079051fb3f3a58002fbbddac3e))
* 修改no-use-before-define规则和@typescript-eslint/no-use-before-define的冲突问题([#35](https://github.com/ecomfe/eslint-config/issues/35)) ([10f4418](https://github.com/ecomfe/eslint-config/commit/10f44187c5ea44402abb49da6c6c3c224d1be73b))
* **import/extensions:** 'never,' => 'never' [@typo](https://github.com/typo) ([0d80f8b](https://github.com/ecomfe/eslint-config/commit/0d80f8be259e5fe0b947ef51776b760826f76381))
* **import/extensions:** 更正一个配置问题 ([fcce9d9](https://github.com/ecomfe/eslint-config/commit/fcce9d9239679071bc1d8e5d5e83b2247e982b25))
* spaced-comment 增加新exception([#31](https://github.com/ecomfe/eslint-config/issues/31)) ([7c200c5](https://github.com/ecomfe/eslint-config/commit/7c200c5db75845e19819a07e76b2e6ae16e38581))
* 添加react/jsx-props-no-multi-spaces和react/jsx-props-no-multi-spaces两条规则检查([#30](https://github.com/ecomfe/eslint-config/issues/30)) ([d34bd22](https://github.com/ecomfe/eslint-config/commit/d34bd22cd757b4eb3b05b13a1621a2664d79b71a))

## [7.0.0](https://github.com/ecomfe/eslint-config/compare/v6.2.1...v7.0.0) (2020-12-28)


### ⚠ BREAKING CHANGES

* require `eslint-plugin-vue@7`

### Features

* update eslint-plugin-vue to v7, add support for new rules and Vue 3, update version declaration for peer deps ([885fe21](https://github.com/ecomfe/eslint-config/commit/885fe211168289c64181bfbd451bd1bf7081fcaa))


### Bug Fixes

* allow console.error, warn and info ([3e2cccc](https://github.com/ecomfe/eslint-config/commit/3e2cnpm publish ccc6603a189dded39c4b8a547df21064817d))
* fix block-spacing for vue ([a7b4719](https://github.com/ecomfe/eslint-config/commit/a7b471935f78bd91a0503ac126eb088cc2379926))
* fix vue/no-deprecated-data-object-declaration setting ([1e2a28a](https://github.com/ecomfe/eslint-config/commit/1e2a28a1262d7042b304a87c3bfc49a3d683c2dd))

### [6.2.1](https://github.com/ecomfe/eslint-config/compare/v6.2.0...v6.2.1) (2020-12-11)

## [6.2.0](https://github.com/ecomfe/eslint-config/compare/v6.1.0...v6.2.0) (2020-12-09)


### Features

* add baidu only rules ([91aa59a](https://github.com/ecomfe/eslint-config/commit/91aa59a9a874310b20f24779937603d9bb72ffb5))
* add defect detection rules for baidu ([93ffdc6](https://github.com/ecomfe/eslint-config/commit/93ffdc61daff91a74f99b48c3623c92632cfe4fe))
* add San support ([bc69381](https://github.com/ecomfe/eslint-config/commit/bc6938135ba517606d9fb8dd8b19e3341b5523ff))


### Bug Fixes

* disable all default errors in defect rules ([c922402](https://github.com/ecomfe/eslint-config/commit/c922402b29f65da86a4055d92471e49554c36a6a))
* loosen some rules ([5fffc72](https://github.com/ecomfe/eslint-config/commit/5fffc721376651c2943ea6582c2e51c1488142e1))
* remove some duplicated rule definitions ([31e2233](https://github.com/ecomfe/eslint-config/commit/31e2233df3a23cf739d2cf9d276993b39aa0377d))

## [6.1.0](https://github.com/ecomfe/eslint-config/compare/v6.0.1...v6.1.0) (2020-11-13)


### Features

* disable @typescript-eslint/no-parameter-properties ([6550893](https://github.com/ecomfe/eslint-config/commit/6550893dad20a59bad195b16e5cb6357bae83a2b))
