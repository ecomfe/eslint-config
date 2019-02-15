/* eslint-disable import/unambiguous, import/no-commonjs */
const {default: importDefault, strict: importStrict} = require('./import');
const {default: reactDefault, strict: reactStrict} = require('./react');
const {default: reactHooksDefault, strict: reactHooksStrict} = require('./react-hooks');

exports.default = {
    'import': importDefault,
    'react': reactDefault,
    'react-hooks': reactHooksDefault,
};

exports.strict = {
    'import': importStrict,
    'react': reactStrict,
    'react-hooks': reactHooksStrict,
};
