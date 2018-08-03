/* eslint-disable import/unambiguous, import/no-commonjs */
const partials = require('../partials');

const isPluginInstalled = name => {
    try {
        require('eslint-plugin-' + name); // eslint-disable-line global-require, import/no-dynamic-require
        return true;
    }
    catch (ex) {
        return false;
    }
};

const pluginDependencies = ['react', 'import'];

exports.plugins = () => [
    'babel',
    ...pluginDependencies.filter(isPluginInstalled)
];

exports.partials = type => pluginDependencies.reduce(
    (rules, name) => {
        const partial = isPluginInstalled(name) ? partials[type][name] : {};
        return {...rules, ...partial};
    },
    {}
);
