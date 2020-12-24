const defaults = require('./index');
const version = require('./version');

const v3Rules = {
    'vue/require-explicit-emits': 'error',
};

module.exports = {
    ...defaults,
    rules: {
        ...defaults.rules,
        'vue/no-arrow-functions-in-watch': 'error',
        'vue/no-mutating-props': 'error',
        'vue/no-use-v-if-with-v-for': 'error',
        'vue/v-bind-style': 'error',
        'vue/v-on-style': 'error',
        'vue/attributes-order': 'error',
        'vue/block-tag-newline': 'error',
        'vue/html-comment-content-newline': 'error',
        'vue/html-comment-content-spacing': 'error',
        'vue/html-comment-indent': 'error',
        'vue/no-duplicate-attr-inheritance': 'error',
        'vue/no-empty-component-block': 'error',
        'vue/no-multiple-objects-in-class': 'error',
        'vue/no-potential-component-option-typo': 'warn',
        'vue/no-reserved-component-names': 'error',
        'vue/no-template-target-blank': 'error',
        'vue/no-useless-v-bind': 'error',
        'vue/no-async-in-computed-properties': 'error',
        'vue/no-side-effects-in-computed-properties': 'error',
        'vue/require-component-is': 'error',
        'vue/no-template-shadow': 'error',
        'vue/no-v-html': 'warn',
        'vue/order-in-components': 'warn',
        'vue/match-component-file-name': 'error',
        'vue/no-boolean-default': 'warn',
        'vue/no-static-inline-styles': 'warn',
        'vue/padding-line-between-blocks': 'error',
        'vue/require-name-property': 'error',
        'vue/v-on-function-call': 'error',
        'vue/no-lone-template': 'error',
        'vue/no-multiple-slot-args': 'error',
        ...version === 3 ? v3Rules : {},
    },
};
