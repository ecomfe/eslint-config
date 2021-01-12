const {rules: base} = require('../index');
const {getConfig} = require('./factory');

module.exports = getConfig(true, base);
