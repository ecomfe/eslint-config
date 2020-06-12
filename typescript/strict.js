const {overrides: [defaults]} = require('./index');

module.exports = {
    overrides: [
        {
            ...defaults,
            rules: {
                ...defaults.rules,
                '@typescript-eslint/ban-ts-comment': 'warn',
                '@typescript-eslint/no-floating-promises': 'warn',
            },
        },
    ],
};
