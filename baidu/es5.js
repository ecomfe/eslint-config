const defaults = require('./default');


module.exports = {
    ...defaults,
    rules: {
        ...defaults.rules,
        'no-var': 'off',
        'constructor-super': 'off',
        'prefer-rest-params': 'off',
        'no-this-before-super': 'off',
    },
};

