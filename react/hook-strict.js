const defaults = require('./hook');

module.exports = {
    ...defaults,
    rules: {
        ...defaults.rules,
        'react-hooks/exhaustive-deps': 'error',
    },
};
