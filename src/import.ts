import type {Linter} from 'eslint';
import importPlugin from 'eslint-plugin-import';

export interface ImportConfigOptions {
    strict?: boolean;
    node?: boolean;
    webpack?: boolean;
}

// eslint-disable-next-line complexity
export function configureImport(options: ImportConfigOptions = {}): Linter.Config[] {
    const {strict = false, node = false, webpack = false} = options;
    // 原则上，所有Bundler可以检测出来的，都不在这里做检查
    return [
        {
            plugins: {
                import: importPlugin,
            },
            rules: {
                'import/no-unresolved': 'off',
                'import/named': 'error',
                'import/default': 'error',
                'import/namespace': 'off',
                'import/no-restricted-paths': 'off',
                'import/no-absolute-path': 'error',
                'import/no-dynamic-require': 'warn',
                'import/no-internal-modules': 'off',
                'import/no-webpack-loader-syntax': 'warn',
                'import/no-self-import': 'error',
                'import/no-cycle': strict ? 'warn' : 'off',
                'import/no-useless-path-segments': 'error',
                'import/no-relative-parent-imports': 'off',

                'import/export': 'off',
                'import/no-named-as-default': strict ? 'warn' : 'off',
                'import/no-named-as-default-member': 'warn',
                'import/no-deprecated': 'error',
                'import/no-extraneous-dependencies': strict
                    ? [
                        'error',
                        {
                            devDependencies: true,
                            optionalDependencies: true,
                            peerDependencies: true,
                        },
                    ]
                    : 'off',
                'import/no-mutable-exports': strict ? 'warn' : 'off',
                'import/no-unused-modules': 'off',

                'import/unambiguous': 'error',
                'import/no-commonjs': strict ? 'error' : 'warn',
                'import/no-amd': strict ? 'error' : 'warn',
                'import/no-nodejs-modules': node ? 'error' : 'off',

                'import/first': 'error',
                'import/exports-last': 'off',
                'import/no-duplicates': 'error',
                'import/no-namespace': 'off',
                // 无法处理ESM和CJS的差异，不启用
                'import/extensions': 'off',
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
                'import/no-default-export': 'off',
                'import/no-named-export': 'off',
                'import/no-anonymous-default-export': strict
                    ? [
                        'warn',
                        {
                            allowArray: true,
                            allowArrowFunction: true,
                            allowAnonymousClass: false,
                            allowAnonymousFunction: false,
                            allowCallExpression: true,
                            allowLiteral: true,
                            allowObject: true,
                        },
                    ]
                    : 'off',
                'import/group-exports': 'off',
                'dynamic-import-chunkname': webpack ? 'warn' : 'off',
            },
        },
    ];
}
