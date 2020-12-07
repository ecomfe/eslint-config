const defaults = require('./defect');
const patch = require('./es5-patch');

module.exports = {
    ...defaults,
    rules: {
        ...defaults.rules,
        ...patch,
    },
};

