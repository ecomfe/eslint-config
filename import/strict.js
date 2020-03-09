const defaults = require('./index');

module.exports = {
    ...defaults,
    rules: {
        ...defaults.rules,
        'import/no-named-as-default': 'warn',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
                optionalDependencies: true,
                peerDependencies: true,
            },
        ],
        'import/no-mutable-exports': 'warn',
        'import/no-commonjs': 'error',
        'import/no-amd': 'error',
        'import/no-named-default': 'error',
    },
};
