const defaults = require('./index');

module.exports = {
    ...defaults,
    plugins: ['react', 'react-hooks'],
    rules: {
        ...defaults.rules,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
};
