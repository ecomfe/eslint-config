const {overrides: [defaults]} = require('./index');

module.exports = {
    overrides: [
        {
            ...defaults,
            rules: {
                ...defaults.rules,
                '@typescript-eslint/ban-ts-comment': 'warn',

                /**
                 * @note:
                 * 1. Assumption & disclaimer
                 *
                 * This change is made based on the assumption,
                 * that this rule being raised to 'warn' previously,
                 * was due to a pair of contradictory rules :
                 *
                 * `no-void` & `@typescript-eslint/no-floating-promises`.
                 *
                 * For more details about the issue, please refer to :
                 * {@link https://github.com/ecomfe/eslint-config/issues/25}
                 *
                 * Now that the pattern of `void floatingPromise` is allowed
                 * to avoid floating promises being complained,
                 * this rule is suggested to be promoted to `error`
                 *
                 * 2. For future record
                 *
                 * In fact, `ignoreVoid: true` is by default.
                 * We explicitly set it here just for future record, however.
                 *
                 * {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md#ignorevoid}
                 */
                '@typescript-eslint/no-floating-promises': ['error', {ignoreVoid: true}],

                /**
                 * @note: This is related to the rule above.
                 */
                'no-void': ['error', {'allowAsStatement': true}],

            },
        },
    ],
};
