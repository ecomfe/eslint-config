const {rules: base} = require('./default');
const {getConfig} = require('../vue/factory');

module.exports = getConfig(false, base);
