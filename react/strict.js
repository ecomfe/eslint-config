const defaults = require('./index');

module.exports = {
    ...defaults,
    rules: {
        ...defaults.rules,
        'react-hooks/exhaustive-deps': 'error',
        'react/forbid-component-props': 'off',
        'react/jsx-handler-names': [
            'off',
            {
                'eventHandlerPrefix': '.*',
                'eventHandlerPropPrefix': 'on',
            },
        ],
        'react/jsx-no-bind': [
            'error',
            {
                'ignoreRefs': true,
                'allowArrowFunctions': false,
                'allowBind': false,
            },
        ],
        'react/jsx-wrap-multilines': [
            'error',
            {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                return: 'parens-new-line',
                arrow: 'parens-new-line',
            },
        ],
    },
};
