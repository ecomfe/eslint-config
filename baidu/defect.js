const defaults = require('./default');

const switchLevel = (rule, newLevel) => [newLevel, ...rule.slice(1)];

module.exports = {
    ...defaults,
    rules: {
        ...defaults.rules,
        'no-eval': 'error',
        'no-extra-bind': 'error',
        'no-implied-eval': 'error',
        'no-irregular-whitespace': 'error',
        'no-native-reassign': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-proto': 'error',
        'no-delete-var': 'error',
        'no-unused-vars': switchLevel(defaults.rules['no-unused-vars'], 'error'),
        'new-parens': 'error',
        'space-unary-ops': 'error',
        'no-dupe-class-members': 'error',
    },
};

