const defaults = require('./index');

module.exports = {
    ...defaults,
    rules: {
        ...defaults.rules,
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
        'vue/sort-keys': 'off',
        'vue/static-class-names-order': 'off',
        'vue/v-on-function-call': 'error',
    },
};
