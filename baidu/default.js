const defaults = require('../index');

module.exports = {
    ...defaults,
    rules: {
        ...defaults.rules,
        'arrow-parens': 'off',
        'brace-style': 'off',
        'comma-dangle': 'off',
        'no-array-constructor': 'warn',
        'no-class-assign': 'off',
        'no-console': 'off',
        'no-dupe-args': 'off',
        'no-dupe-args': 'warn',
        'no-else-return': 'off',
        'no-ex-assign': 'warn',
        'no-extend-native': 'warn',
        'no-func-assign': 'off',
        'no-inner-declarations': 'off',
        'no-iterator': 'warn',
        'no-multi-str': 'off',
        'no-native-reassign': 'warn',
        'no-negated-in-lhs': 'off',
        'no-negated-in-lhs': 'warn',
        'no-proto': 'warn',
        'no-sparse-arrays': 'off',
        'no-undef-init': 'off',
        'operator-linebreak': 'off',
        'radix': 'error',
        'use-isnan': 'off',
        'wrap-iife': 'off',
    },
};

