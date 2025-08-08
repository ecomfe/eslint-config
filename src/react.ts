import type {Linter} from 'eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export interface ReactConfigOptions {
    strict?: boolean;
}

export function configureReact(options: ReactConfigOptions = {}): Linter.Config[] {
    const {strict = false} = options;
    // 原则上非函数组件的规则全部关闭
    return [
        {
            plugins: {
                react,
                'react-hooks': reactHooks,
            },
            settings: {
                react: {
                    version: 'detect',
                },
            },
            rules: {
                'react-hooks/rules-of-hooks': 'error',
                'react-hooks/exhaustive-deps': 'error',

                'react/boolean-prop-naming': 'off',
                'react/button-has-type': 'off',
                'react/checked-requires-onchange-or-readonly': 'off',
                'react/default-props-match-prop-types': 'off',
                'react/destructuring-assignment': 'off',
                'react/display-name': 'off',
                'react/forbid-component-props': 'off',
                'react/forbid-dom-props': 'off',
                'react/forbid-elements': 'off',
                'react/forbid-foreign-prop-types': 'off',
                'react/forbid-prop-types': 'off',
                'react/forward-ref-uses-ref': 'off',
                'react/function-component-definition': 'off',
                'react/hook-use-state': 'warn',
                'react/iframe-missing-sandbox': 'off',
                'react/jsx-boolean-value': ['error', 'never'],
                'react/jsx-child-element-spacing': 'off',
                'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
                'react/jsx-closing-tag-location': 'error',
                'react/jsx-curly-brace-presence': [
                    'error',
                    {
                        props: 'never',
                        children: 'never',
                        propElementValues: 'always',
                    },
                ],
                'react/jsx-curly-newline': [
                    'error',
                    {
                        multiline: 'require',
                        singleline: 'forbid',
                    },
                ],
                'react/jsx-curly-spacing': ['error', 'never'],
                'react/jsx-equals-spacing': ['error', 'never'],
                'react/jsx-filename-extension': [
                    'error',
                    {
                        extensions: ['.js', '.jsx', '.es', '.tsx'],
                    },
                ],
                'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
                'react/jsx-fragments': ['error', 'syntax'],
                'react/jsx-handler-names': 'off',
                'react/jsx-indent': ['error', 4],
                'react/jsx-indent-props': ['error', 4],
                'react/jsx-key': 'error',
                'react/jsx-max-depth': 'off',
                'react/jsx-max-props-per-line': [
                    'error',
                    {
                        when: 'multiline',
                    },
                ],
                'react/jsx-newline': 'off',
                'react/jsx-no-bind': [
                    'warn',
                    {
                        ignoreRefs: true,
                        allowArrowFunctions: false,
                        allowBind: false,
                        ignoreDOMComponents: true,
                    },
                ],
                'react/jsx-no-comment-textnodes': 'warn',
                'react/jsx-no-constructed-context-values': strict ? 'warn' : 'off',
                'react/jsx-no-duplicate-props': [
                    'error',
                    {
                        ignoreCase: true,
                    },
                ],
                'react/jsx-no-leaked-render': 'off',
                'react/jsx-no-literals': 'off',
                'react/jsx-no-script-url': 'warn',
                'react/jsx-no-target-blank': 'error',
                'react/jsx-no-undef': 'error',
                'react/jsx-no-useless-fragment': strict ? 'error' : 'warn',
                'react/jsx-one-expression-per-line': 'off',
                'react/jsx-pascal-case': [
                    'error',
                    {
                        allowAllCaps: true,
                    },
                ],
                'react/jsx-props-no-multi-spaces': 'error',
                'react/jsx-props-no-spread-multi': 'error',
                'react/jsx-props-no-spreading': 'off',
                'react/jsx-sort-props': 'off',
                'react/jsx-tag-spacing': [
                    'error',
                    {
                        closingSlash: 'never',
                        beforeSelfClosing: 'always',
                        beforeClosing: 'never',
                        afterOpening: 'never',
                    },
                ],
                'react/jsx-uses-react': 'off',
                'react/jsx-uses-vars': 'error',
                'react/jsx-wrap-multilines': [
                    'error',
                    {
                        declaration: 'parens-new-line',
                        assignment: 'parens-new-line',
                        return: 'parens-new-line',
                        arrow: 'parens-new-line',
                    },
                ],
                'react/no-access-state-in-setstate': 'off',
                'react/no-adjacent-inline-elements': 'off',
                'react/no-array-index-key': 'error',
                'react/no-arrow-function-lifecycle': 'off',
                'react/no-children-prop': 'error',
                'react/no-danger': 'warn',
                'react/no-danger-with-children': 'error',
                'react/no-deprecated': 'warn',
                'react/no-did-mount-set-state': 'off',
                'react/no-did-update-set-state': 'off',
                'react/no-direct-mutation-state': 'off',
                'react/no-find-dom-node': 'off',
                'react/no-invalid-html-attribute': 'off',
                'react/no-is-mounted': 'off',
                'react/no-multi-comp': 'off',
                'react/no-namespace': 'off',
                'react/no-object-type-as-default-prop': 'off',
                'react/no-redundant-should-component-update': 'off',
                'react/no-render-return-value': 'error',
                'react/no-set-state': 'off',
                'react/no-string-refs': 'off',
                'react/no-this-in-sfc': 'off',
                'react/no-typos': 'off',
                'react/no-unescaped-entities': 'error',
                'react/no-unknown-property': 'error',
                'react/no-unsafe': 'off',
                'react/no-unstable-nested-components': strict ? 'error' : 'warn',
                'react/no-unused-class-component-methods': 'off',
                'react/no-unused-prop-types': 'off',
                'react/no-unused-state': 'off',
                'react/no-will-update-set-state': 'off',
                'react/prefer-es6-class': 'off',
                'react/prefer-exact-props': 'off',
                'react/prefer-read-only-props': 'off',
                'react/prefer-stateless-function': 'off',
                'react/prop-types': 'off',
                'react/react-in-jsx-scope': 'off',
                'react/require-default-props': 'off',
                'react/require-optimization': 'off',
                'react/require-render-return': 'off',
                'react/self-closing-comp': [
                    'error',
                    {
                        component: true,
                        html: false,
                    },
                ],
                'react/sort-comp': 'off',
                'react/sort-default-props': 'off',
                'react/sort-prop-types': 'off',
                'react/state-in-constructor': 'off',
                'react/static-property-placement': 'off',
                'react/style-prop-object': 'error',
                'react/void-dom-elements-no-children': 'error',
            },
        },
    ];
}
