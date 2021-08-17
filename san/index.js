const {parserOptions} = require('../index');

module.exports = {
    parser: 'san-eslint-parser',
    parserOptions: {
        ...parserOptions,
        parser: '@babel/eslint-parser',
    },
    plugins: ['san'],
    overrides: [
        {
            files: ['*.san'],
            rules: {
                'indent': 'off',
            },
        },
    ],
    rules: {
        // base
        'san/comment-directive': 'error',
        // essential
        'san/custom-event-name-casing': 'error',
        'san/no-dupe-keys': 'error',
        'san/no-dupe-s-else-if': 'error',
        'san/no-duplicate-attributes': 'error',
        'san/no-multiple-template-root': 'error',
        'san/no-parsing-error': 'error',
        'san/no-reserved-keys': 'error',
        'san/no-textarea-mustache': 'error',
        'san/no-unused-components': 'error',
        'san/no-unused-vars': 'error',
        'san/no-use-s-if-with-s-for': 'error',
        'san/return-in-computed-property': 'error',
        'san/valid-template-root': 'error',
        'san/valid-s-else-if': 'error',
        'san/valid-s-else': 'error',
        'san/valid-s-for': 'error',
        'san/valid-s-if': 'error',
        'san/valid-s-show': 'error',
        'san/valid-components-name': 'error',
        // strongly-recommended
        'san/attribute-hyphenation': 'warn',
        'san/boolean-value': ['warn', 'never'],
        'san/html-closing-bracket-newline': 'warn',
        'san/html-closing-bracket-spacing': [
            'warn', {
                'selfClosingTag': 'never',
            },
        ],
        'san/html-end-tags': 'warn',
        'san/html-quotes': 'warn',
        'san/html-self-closing': [
            'error',
            {
                'html': {
                    'void': 'never',
                    'normal': 'never',
                    'component': 'always',
                },
                'svg': 'always',
                'math': 'always',
            },
        ],
        'san/max-attributes-per-line': [
            'error', {
                'singleline': 2,
                'multiline': {
                    'max': 2,
                    'allowFirstLine': false,
                },
            },
        ],
        'san/multiline-html-element-content-newline': 'warn',
        'san/mustache-interpolation-spacing': 'warn',
        'san/no-multi-spaces': 'warn',
        'san/no-spaces-around-equal-signs-in-attribute': 'warn',
        'san/one-component-per-file': 'warn',
        'san/singleline-html-element-content-newline': 'warn',
        'san/html-indent': ['error', 4, {
            'attribute': 1,
            'baseIndent': 1,
            'closeBracket': 0,
            'alignAttributesVertically': false,
            'ignores': [],
        }],
        // recommended
        'san/attributes-order': 'warn',
        'san/component-tags-order': [
            'warn',
            {
                'order': [
                    'template',
                    'script',
                    'style',
                ],
            },
        ],
        'san/no-expression-in-template-literals': 'warn',
        'san/no-lone-template': 'warn',
        'san/this-in-template': 'warn',
    },
};
