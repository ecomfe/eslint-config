import defaults from './default.js';

export default [
    defaults,
    {
        rules: {
            'san/no-async-in-computed-properties': 'error',
            'san/no-side-effects-in-computed-properties': 'error',
            'san/no-template-shadow': 'error',
            'san/order-in-components': 'warn',
        },
    },
];
