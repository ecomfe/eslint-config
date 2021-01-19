const defaults = require('./hook');
const strict = require('./strict');

module.exports = {
    ...defaults,
    rules: {
        ...defaults.rules,
        ...strict.rules,
        'react-hooks/exhaustive-deps': 'error',
    },
};
