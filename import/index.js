module.exports = {
    plugins: ['import'],
    rules: {
        'import/no-unresolved': 'error',
        'import/named': 'error',
        'import/default': 'error',
        'import/namespace': 'off',
        'import/no-restricted-paths': 'off',
        'import/no-absolute-path': 'error',
        'import/no-dynamic-require': 'warn',
        'import/no-internal-modules': 'off',
        'import/no-webpack-loader-syntax': 'warn',
        'import/export': 'error',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'error',
        'import/no-deprecated': 'error',
        'import/no-extraneous-dependencies': 'off',
        'import/no-mutable-exports': 'off',
        'import/unambiguous': 'error',
        'import/no-commonjs': 'warn',
        'import/no-amd': 'warn',
        'import/no-nodejs-modules': 'off',
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/no-namespace': 'off',
        'import/extensions': [
            'error',
            /**
             * 根据分析, extension 的配置, 是没有前置 `.` 的
             * 如:
             *
             * 'js': 'never' => correct
             * '.js': 'never' => incorrect
             *
             * 参考 : https://github.com/benmosher/eslint-plugin-import/blob/9fa6bc9a05dfca906f6a485c92b15845c2490a32/src/rules/extensions.js#L157
             */
            {
                'js': 'never',
                'jsx': 'never',
                'es': 'never',
            },
        ],
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            },
        ],
        'import/newline-after-import': 'error',
        'import/prefer-default-export': 'off',
        'import/max-dependencies': 'off',
        'import/no-unassigned-import': 'off',
        'import/no-named-default': 'error',
    },
    overrides: [
        {
            files: [
                '**/config/**/*.js',
                '**/mock/**/*.js',
                '*.config.js',
                'webpack-*.js',
                'webpack.*.js',
                '.*rc.js',
            ],
            rules: {
                'import/unambiguous': 'off',
                'import/no-commonjs': 'off',
            },
        },
    ],
};
