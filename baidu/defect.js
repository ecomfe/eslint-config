const defaults = require('./default');

const switchLevel = (rule, newLevel) => {
    if (typeof rule === 'string' || typeof rule === 'number') {
        return newLevel;
     }

     return [newLevel, ...rule.slice(1)];
};

// Disable all error rules in default, these will be reported from code style check
const defaultRulesWithErrosDisabled = Object.entries(defaults.rules).reduce(
    (rules, [name, config]) => {
        const level = (typeof config === 'string' || typeof config === 'number') ? config : config[0];
        rules[name] = (level === 'error' || level === 2) ? switchLevel(config, 'off') : config;
        return rules;
    },
    {}
);

module.exports = {
    ...defaults,
    rules: {
        ...defaultRulesWithErrosDisabled,
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

