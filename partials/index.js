/* eslint-disable import/unambiguous, import/no-commonjs */
const {default: importDefault, strict: importStrict} = require('./import');
const {default: reactDefault, strict: reactStrict} = require('./react');

exports.default = {
    import: importDefault,
    react: reactDefault,
};

exports.strict = {
    import: importStrict,
    react: reactStrict,
};
