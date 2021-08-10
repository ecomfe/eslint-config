const defaults = require('./index');

module.exports = {
    ...defaults,
    rules: {
        ...defaults.rules,
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-handler-names': [
            'off',
            {
                'eventHandlerPrefix': '.*',
                'eventHandlerPropPrefix': 'on',
            },
        ],
    },
};
