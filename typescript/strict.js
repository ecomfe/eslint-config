const {overrides: [defaults]} = require('./index');

module.exports = {
    overrides: [
        {
            ...defaults,
            rules: {
                ...defaults.rules,
                '@typescript-eslint/ban-ts-ignore': 'warn',
                '@typescript-eslint/no-floating-promises': 'warn',
            },
        },
    ],
};
