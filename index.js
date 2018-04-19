/* eslint-disable import/unambiguous, import/no-commonjs */
module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['babel', 'react', 'import'],
    env: {
        browser: true,
        node: true,
        es6: true
    },
    rules: {
        'generator-star-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'babel/new-cap': [
            'error',
            {
                'capIsNewExceptions': [
                    'T',
                    'AddToFavoritesBar'
                ]
            }
        ],
        'array-bracket-spacing': [
            'error',
            'never'
        ],
        'babel/object-curly-spacing': [
            'error',
            'never'
        ],
        'arrow-parens': [
            'error',
            'as-needed'
        ],
        'no-console': 'warn',
        'no-constant-condition': 'warn',
        'comma-dangle': 'error',
        'no-debugger': 'error',
        'no-dupe-keys': 'warn',
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'warn',
        'no-func-assign': 'warn',
        'no-inner-declarations': 'warn',
        'no-invalid-regexp': 'error',
        'no-negated-in-lhs': 'error',
        'no-obj-calls': 'error',
        'no-sparse-arrays': 'error',
        'no-unreachable': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'error',
        'curly': [
            'error',
            'all'
        ],
        'eqeqeq': [
            'error',
            'allow-null'
        ],
        'guard-for-in': 'warn',
        'no-else-return': 'warn',
        'no-labels': [
            'warn',
            {
                'allowLoop': true
            }
        ],
        'no-eval': 'warn',
        'no-extend-native': 'error',
        'no-extra-bind': 'warn',
        'no-implied-eval': 'warn',
        'no-iterator': 'error',
        'no-irregular-whitespace': 'warn',
        'no-lone-blocks': 'warn',
        'no-loop-func': 'warn',
        'no-multi-str': 'warn',
        'no-native-reassign': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'warn',
        'no-octal-escape': 'warn',
        'no-proto': 'error',
        'no-redeclare': 'warn',
        'no-self-compare': 'error',
        'no-unneeded-ternary': 'error',
        'no-with': 'warn',
        'radix': 'error',
        'wrap-iife': [
            'error',
            'any'
        ],
        'no-delete-var': 'warn',
        'no-dupe-args': 'error',
        'no-duplicate-case': 'error',
        'no-label-var': 'warn',
        'no-shadow-restricted-names': 'error',
        'no-undef': 'error',
        'no-undef-init': 'warn',
        'no-unused-vars': [
            'warn',
            {
                'vars': 'local',
                'args': 'none'
            }
        ],
        'no-use-before-define': [
            'error',
            'nofunc'
        ],
        'brace-style': [
            'warn',
            'stroustrup',
            {}
        ],
        'comma-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'comma-style': [
            'error',
            'last'
        ],
        'new-parens': 'warn',
        'no-array-constructor': 'error',
        'no-multi-spaces': [
            'error',
            {
                'exceptions': {
                    'Property': true,
                    'BinaryExpression': true,
                    'VariableDeclarator': true
                }
            }
        ],
        'no-new-object': 'error',
        'no-spaced-func': 'error',
        'no-trailing-spaces': 'error',
        'no-extra-parens': [
            'error',
            'functions'
        ],
        'no-mixed-spaces-and-tabs': 'error',
        'one-var': [
            'error',
            'never'
        ],
        'operator-linebreak': [
            'error',
            'before'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'semi-spacing': 'error',
        'keyword-spacing': 'error',
        'key-spacing': [
            'error',
            {
                'beforeColon': false,
                'afterColon': true
            }
        ],
        'space-before-function-paren': [
            'error',
            {
                'anonymous': 'always',
                'named': 'never'
            }
        ],
        'space-before-blocks': [
            'error',
            'always'
        ],
        'computed-property-spacing': [
            'error',
            'never'
        ],
        'space-in-parens': [
            'error',
            'never'
        ],
        'space-unary-ops': 'warn',
        'spaced-comment': [
            'error',
            'always',
            {
                'exceptions': [
                    '-',
                    '+',
                    '\''
                ],
                'block': {
                    'balanced': true
                }
            }
        ],
        'max-nested-callbacks': [
            'warn',
            3
        ],
        'max-depth': [
            'warn',
            6
        ],
        'max-len': [
            'error',
            120,
            4,
            {
                'ignoreUrls': true,
                'ignoreComments': true
            }
        ],
        'max-params': [
            'warn',
            6
        ],
        'space-infix-ops': 'error',
        'dot-notation': [
            'error',
            {
                'allowKeywords': true,
                'allowPattern': '^catch$'
            }
        ],
        'arrow-spacing': 'error',
        'constructor-super': 'error',
        'no-confusing-arrow': [
            'error',
            {
                'allowParens': true
            }
        ],
        'no-class-assign': 'warn',
        'no-const-assign': 'error',
        'no-dupe-class-members': 'warn',
        'no-this-before-super': 'warn',
        'no-var': 'warn',
        'no-duplicate-imports': 'warn',
        'prefer-rest-params': 'error',
        'unicode-bom': 'warn',
        'max-statements-per-line': 'error',
        'react/display-name': 'off',
        'react/forbid-component-props': 'warn',
        'react/forbid-elements': 'off',
        'react/forbid-foreign-prop-types': 'warn',
        'react/forbid-prop-types': 'warn',
        'react/jsx-boolean-value': [
            'error',
            'never'
        ],
        'react/jsx-closing-bracket-location': [
            'error',
            'line-aligned'
        ],
        'react/jsx-curly-spacing': [
            'error',
            'never'
        ],
        'react/jsx-equals-spacing': [
            'error',
            'never'
        ],
        'react/jsx-filename-extension': [
            'error',
            {
                'extensions': [
                    '.js',
                    '.jsx',
                    '.es'
                ]
            }
        ],
        'react/jsx-first-prop-new-line': [
            'error',
            'multiline-multiprop'
        ],
        'react/jsx-handler-names': [
            'error',
            {
                'eventHandlerPrefix': '.*',
                'eventHandlerPropPrefix': 'on'
            }
        ],
        'react/jsx-indent-props': [
            'error',
            4
        ],
        'react/jsx-indent': [
            'error',
            4
        ],
        'react/jsx-key': 'error',
        'react/jsx-max-props-per-line': [
            'error',
            {
                'when': 'multiline'
            }
        ],
        'react/jsx-no-bind': [
            'error',
            {
                'ignoreRefs': true,
                'allowArrowFunctions': false,
                'allowBind': false
            }
        ],
        'react/jsx-no-comment-textnodes': 'warn',
        'react/jsx-no-duplicate-props': [
            'error',
            {
                'ignoreCase': true
            }
        ],
        'react/jsx-no-literals': 'off',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': [
            'error',
            {
                'allowAllCaps': true
            }
        ],
        'react/jsx-sort-props': 'off',
        'react/jsx-tag-spacing': [
            'error',
            {
                'closingSlash': 'never',
                'beforeSelfClosing': 'always',
                'afterOpening': 'never'
            }
        ],
        'react/jsx-uses-react': 'off',
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': [
            'error',
            {
                'declaration': true,
                'assignment': true,
                'return': true,
                'arrow': true
            }
        ],
        'react/no-array-index-key': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-danger': 'warn',
        'react/no-deprecated': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-will-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': [
            'error',
            {
                'ignoreStateless': true
            }
        ],
        'react/no-render-return-value': 'error',
        'react/no-set-state': 'off',
        'react/no-string-refs': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unused-prop-types': 'error',
        'react/prefer-es6-class': [
            'error',
            'always'
        ],
        'react/prefer-stateless-function': 'error',
        'react/prop-types': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'error',
        'react/require-optimization': 'off',
        'react/require-render-return': 'error',
        'react/self-closing-comp': [
            'error',
            {
                'component': true,
                'html': false
            }
        ],
        'react/sort-comp': [
            'off',
            {
                'order': [
                    'static-properties',
                    'static-methods',
                    'lifecycle',
                    'everything-else',
                    'render'
                ],
                'groups': {
                    'static-properties': [
                        'displayName',
                        'propTypes',
                        'contextTypes',
                        'childContextTypes',
                        'mixins',
                        'statics'
                    ],
                    'lifecycle': [
                        'defaultProps',
                        'constructor',
                        'getDefaultProps',
                        'getInitialState',
                        'state',
                        'getChildContext',
                        'componentWillMount',
                        'componentDidMount',
                        'componentWillReceiveProps',
                        'shouldComponentUpdate',
                        'componentWillUpdate',
                        'componentDidUpdate',
                        'componentWillUnmount'
                    ]
                }
            }
        ],
        'react/sort-prop-types': 'off',
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',
        'import/no-unresolved': 'error',
        'import/named': 'error',
        'import/default': 'error',
        'import/namespace': 'error',
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
            {
                '.js': 'never,',
                '.jsx': 'never,',
                '.es': 'never'
            }
        ],
        'import/order': 'warn',
        'import/newline-after-import': 'error',
        'import/prefer-default-export': 'off',
        'import/max-dependencies': 'off',
        'import/no-unassigned-import': 'off',
        'import/no-named-default': 'error',
        'no-useless-constructor': 'warn'
    }
};
