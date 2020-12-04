const defaults = require('../index');
const switchLevel = (rule, newLevel) => [newLevel, ...rule.slice(1)];

module.exports = {
    ...defaults,
    rules: {
        ...defaults.rules,
        'arrow-parens': switchLevel(defaults.rules['arrow-parens'], 'warn'),
        'comma-dangle': switchLevel(defaults.rules['comma-dangle'], 'warn'),
        'no-ex-assign': 'warn',
        'no-negated-in-lhs': 'warn',
        'no-sparse-arrays': 'off',
        'use-isnan': 'off',
        'no-extend-native': 'warn',
        'no-iterator': 'warn',
        'no-native-reassign': 'warn',
        'no-proto': 'warn',
        'radix': 'error',
        'wrap-iife': 'off',
        'no-dupe-args': 'warn',
        'no-array-constructor': 'warn',
        'operator-linebreak': 'off',
    },
};

