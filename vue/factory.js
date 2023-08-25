/* eslint-disable no-console, global-require */
const path = require('path');
const fs = require('fs');
const {major, minor, minVersion} = require('semver');
const {parserOptions} = require('../index');

/**
 * Detect the version of Vue
 *
 * @returns {string|null} version range of Vue
 */
function getVersionRange() {
    try {
        // fallback to checking local package.json
        const {
            dependencies = {},
            peerDependencies = {},
            devDependencies = {},
        } = JSON.parse(
            fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8')
        );

        return (
            dependencies.vue || peerDependencies.vue || devDependencies.vue || null
        );
    } catch (_) {
        // nothing can be done
    }

    return null;
}

/**
 * Calculate Vue version from semver range
 *
 * @param {string} range version range of Vue
 * @returns {2|2.7|3|null} version of Vue
 */
function detectVersion(range) {
    const majorVersion = major(range);
    const minorVersion = minor(range);

    if (majorVersion === 2 && minorVersion === 7) {
        return 2.7;
    }

    if (majorVersion === 2 || majorVersion === 3) {
        return majorVersion;
    }

    return null;
}

/**
 * Detect the version of Vue from dependencies
 *
 * @param {2|2.7|3=} defaultValue the fallback version if cannot find the version
 * @returns {2|2.7|3|null} version of Vue (only 2, 2.7 and 3 are currently supported)
 */
function getVersion(defaultValue) {
    try {
        const {version} = require('vue/package.json');

        return detectVersion(version);
    } catch (_) {
        const range = getVersionRange();

        if (range) {
            const min = minVersion(range);

            return detectVersion(min);
        }
    }

    if (defaultValue) {
        console.warn(
            `[ecomfe/eslint-config] No valid Vue version is detected. Assuming Vue ${defaultValue} is used.`
        );
        return defaultValue;
    }

    return null;
}

const EXTENDED_RULES = [
    'array-bracket-spacing',
    'arrow-spacing',
    'block-spacing',
    'brace-style',
    'camelcase',
    'comma-dangle',
    'dot-location',
    'eqeqeq',
    'key-spacing',
    'keyword-spacing',
    'max-len',
    'no-empty-pattern',
    'no-irregular-whitespace',
    'no-restricted-syntax',
    '@babel/object-curly-spacing',
    'space-infix-ops',
    'space-unary-ops',
    'no-loss-of-precision',
    'object-shorthand',
    'quote-props',
    'array-element-newline',
    'no-console',
];

/**
 * Get derived rules from a given base JavaScript rules object
 *
 * @param {Object} base base rules
 * @returns {Object} the extended rules
 */
// eslint-disable-next-line complexity
function getExtendedRules(base) {
    return EXTENDED_RULES.reduce((rules, name) => {
        const ext = name.indexOf('/') === -1 ? `vue/${name}` : `vue/${name.split('/')[1]}`;
        const value = base[name] || 'off';

        // eslint-disable-next-line no-param-reassign
        rules[ext] = value;

        return rules;
    }, {});
}

const basicRules = {
    v2: {
        'vue/no-custom-modifiers-on-v-model': 'error',
        'vue/no-multiple-template-root': 'error',
        'vue/no-v-for-template-key': 'error',
        'vue/no-v-model-argument': 'error',
        'vue/valid-v-bind-sync': 'error',
    },
    'v2.7': {
        'vue/no-custom-modifiers-on-v-model': 'error',
        'vue/no-multiple-template-root': 'error',
        'vue/no-v-for-template-key': 'error',
        'vue/no-v-model-argument': 'error',
        'vue/valid-v-bind-sync': 'error',
        'vue/no-export-in-script-setup': 'error',
        'vue/return-in-emits-validator': 'error',
        'vue/valid-define-props': 'error',
        'vue/valid-define-emits': 'error',
        'vue/valid-define-options': 'error',
        'vue/no-setup-props-reactivity-loss': 'error',
        'vue/no-ref-object-reactivity-loss': 'error',
        'vue/define-emits-declaration': 'error',
        'vue/define-props-declaration': 'error',
        'vue/no-required-prop-with-default': 'error',
    },
    v3: {
        'vue/no-deprecated-data-object-declaration': 'error',
        'vue/no-deprecated-destroyed-lifecycle': 'error',
        'vue/no-deprecated-dollar-listeners-api': 'error',
        'vue/no-deprecated-dollar-scopedslots-api': 'error',
        'vue/no-deprecated-events-api': 'error',
        'vue/no-deprecated-filter': 'error',
        'vue/no-deprecated-functional-template': 'error',
        'vue/no-deprecated-html-element-is': 'error',
        'vue/no-deprecated-inline-template': 'error',
        'vue/no-deprecated-props-default-this': 'error',
        'vue/no-deprecated-scope-attribute': 'error',
        'vue/no-deprecated-slot-attribute': 'error',
        'vue/no-deprecated-slot-scope-attribute': 'error',
        'vue/no-deprecated-v-bind-sync': 'error',
        'vue/no-deprecated-v-on-native-modifier': 'error',
        'vue/no-deprecated-v-on-number-modifiers': 'error',
        'vue/no-deprecated-vue-config-keycodes': 'error',
        'vue/no-lifecycle-after-await': 'error',
        'vue/no-ref-as-operand': 'error',
        'vue/no-setup-props-reactivity-loss': 'error',
        'vue/no-v-for-template-key-on-child': 'error',
        'vue/no-watch-after-await': 'error',
        'vue/require-slots-as-functions': 'error',
        'vue/require-toggle-inside-transition': 'error',
        'vue/return-in-emits-validator': 'error',
        'vue/valid-v-is': 'error',
        'vue/v-on-event-hyphenation': 'error',
        'vue/no-deprecated-v-is': 'error',
        'vue/no-export-in-script-setup': 'error',
        'vue/valid-define-props': 'error',
        'vue/valid-define-emits': 'error',
        'vue/valid-define-options': 'error',
        'vue/no-deprecated-router-link-tag-prop': 'error',
        'vue/no-expose-after-await': 'error',
        'vue/no-ref-object-reactivity-loss': 'error',
        'vue/define-emits-declaration': 'error',
        'vue/define-props-declaration': 'error',
        'vue/no-required-prop-with-default': 'error',
        'vue/no-deprecated-model-definition': 'error',
    },
    common: {
        'vue/comment-directive': 'error',
        'vue/jsx-uses-vars': 'error',
        'vue/no-dupe-v-else-if': 'error',
        'vue/no-dupe-keys': 'error',
        'vue/no-duplicate-attributes': [
            'error',
            {
                allowCoexistClass: true,
                allowCoexistStyle: true,
            },
        ],
        'vue/no-parsing-error': 'error',
        'vue/no-reserved-keys': 'error',
        'vue/no-shared-component-data': 'error',
        'vue/no-template-key': 'error',
        'vue/no-textarea-mustache': 'error',
        'vue/no-unused-components': 'error',
        'vue/no-unused-vars': 'error',
        'vue/no-use-v-if-with-v-for': 'warn',
        'vue/require-prop-type-constructor': 'error',
        'vue/require-render-return': 'error',
        'vue/require-v-for-key': 'error',
        'vue/require-valid-default-prop': 'error',
        'vue/return-in-computed-property': 'error',
        'vue/valid-template-root': 'error',
        'vue/valid-v-bind': 'error',
        'vue/valid-v-cloak': 'error',
        'vue/valid-v-else-if': 'error',
        'vue/valid-v-else': 'error',
        'vue/valid-v-for': 'error',
        'vue/valid-v-html': 'error',
        'vue/valid-v-if': 'error',
        'vue/valid-v-model': 'error',
        'vue/valid-v-on': 'error',
        'vue/valid-v-once': 'error',
        'vue/valid-v-pre': 'error',
        'vue/valid-v-show': 'error',
        'vue/valid-v-slot': 'error',
        'vue/valid-v-text': 'error',
        'vue/attribute-hyphenation': 'error',
        'vue/html-closing-bracket-newline': 'error',
        'vue/html-closing-bracket-spacing': [
            'warn',
            {
                selfClosingTag: 'never',
            },
        ],
        'vue/html-end-tags': 'error',
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: false,
                ignores: [],
            },
        ],
        'vue/html-quotes': 'error',
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'never',
                    normal: 'never',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 2,
                multiline: 2,
            },
        ],
        'vue/first-attribute-linebreak': 'error',
        'vue/mustache-interpolation-spacing': 'error',
        'vue/no-multi-spaces': 'error',
        'vue/no-spaces-around-equal-signs-in-attribute': 'error',
        'vue/prop-name-casing': 'error',
        'vue/require-default-prop': 'off',
        'vue/require-prop-types': 'error',
        'vue/v-bind-style': 'warn',
        'vue/v-on-style': 'warn',
        'vue/attributes-order': 'warn',
        'vue/no-multiple-slot-args': 'warn',
        'vue/this-in-template': 'error',
        'vue/component-definition-name-casing': 'off',
        'vue/component-name-in-template-casing': [
            'error',
            'kebab-case',
            {
                registeredComponentsOnly: true,
                ignores: [],
            },
        ],
        'vue/no-deprecated-scope-attribute': 'off',
        'vue/no-deprecated-slot-attribute': 'off',
        'vue/no-deprecated-slot-scope-attribute': 'off',
        'vue/no-reserved-component-names': 'error',
        'vue/require-direct-export': 'error',
        'vue/script-indent': [
            'error',
            4,
            {
                switchCase: 1,
            },
        ],
        'vue/valid-next-tick': 'error',
        'vue/html-button-has-type': 'error',
        'vue/valid-model-definition': 'error',
        'vue/no-unused-refs': 'error',
        'vue/no-this-in-before-route-enter': 'error',
        'vue/no-use-computed-property-like-method': 'error',
        'vue/no-useless-template-attributes': 'error',
        'vue/no-computed-properties-in-data': 'error',
        'vue/no-reserved-props': ['error', {
            vueVersion: getVersion(2) < 3 ? 2 : 3,
        }],
        'vue/no-child-content': 'error',
        'vue/no-v-text-v-html-on-component': 'error',
        'vue/prefer-import-from-vue': 'error',
        'vue/valid-attribute-name': 'error',
        'vue/no-use-v-else-with-v-for': 'error',
    },
};

const strictRules = {
    v2: {
        ...basicRules.v2,
    },
    'v2.7': {
        ...basicRules['v2.7'],
        'vue/define-macros-order': 'error',
    },
    v3: {
        ...basicRules.v3,
        'vue/require-explicit-emits': 'error',
        'vue/require-emit-validator': 'error',
        'vue/define-macros-order': 'error',
    },
    common: {
        ...basicRules.common,
        'vue/no-arrow-functions-in-watch': 'error',
        'vue/no-mutating-props': 'error',
        'vue/no-use-v-if-with-v-for': 'error',
        'vue/v-bind-style': 'error',
        'vue/v-on-style': 'error',
        'vue/attributes-order': 'error',
        'vue/block-tag-newline': 'error',
        'vue/html-comment-content-newline': 'error',
        'vue/html-comment-content-spacing': 'error',
        'vue/html-comment-indent': 'error',
        'vue/no-duplicate-attr-inheritance': 'error',
        'vue/no-empty-component-block': 'error',
        'vue/no-multiple-objects-in-class': 'error',
        'vue/no-potential-component-option-typo': 'warn',
        'vue/no-reserved-component-names': 'error',
        'vue/no-template-target-blank': 'error',
        'vue/no-useless-v-bind': 'error',
        'vue/no-async-in-computed-properties': 'error',
        'vue/no-side-effects-in-computed-properties': 'error',
        'vue/require-component-is': 'error',
        'vue/no-template-shadow': 'error',
        'vue/no-v-html': 'warn',
        'vue/order-in-components': 'warn',
        'vue/match-component-file-name': 'error',
        'vue/no-boolean-default': 'warn',
        'vue/no-static-inline-styles': 'warn',
        'vue/padding-line-between-blocks': 'error',
        'vue/require-name-property': 'error',
        'vue/v-on-function-call': 'error',
        'vue/no-lone-template': 'error',
        'vue/no-multiple-slot-args': 'error',
        'vue/no-v-text': 'error',
        'vue/prefer-true-attribute-shorthand': 'error',
        'vue/prefer-prop-type-boolean-first': 'error',
        'vue/require-typed-ref': 'error',
        'vue/require-typed-object-prop': 'error',
    },
};

/**
 * Try to resolve parser for script blocks
 * TypeScript > Babel
 * @returns path for the resolved parser
 */
function getParser() {
    try {
        const ts = require('typescript');
        const hasTsConfig = !!ts.findConfigFile(
            process.cwd(),
            ts.sys.fileExists,
            'tsconfig.json'
        );

        if (hasTsConfig) {
            return require.resolve('@typescript-eslint/parser');
        }
    } catch (e) {
        // do nothing and fallback to @babel/eslint-parser later
    }
    return require.resolve('@babel/eslint-parser');
}

/**
 *
 * @param {boolean} strict is strict mode
 * @param {Object} base base JavaScript rules object
 * @param {2|2.7|3=} version the fallback version if cannot find the version
 * @returns {Object} the extended Vue rules object
 */
function getRules(strict, base = {}, version = getVersion(2)) {
    const config = strict ? strictRules : basicRules;
    const range = getVersionRange();

    return {
        ...(range
            ? {
                'vue/no-unsupported-features': [
                    'error',
                    {
                        version: range,
                    },
                ],
            }
            : {}),
        ...config.common,
        ...config[`v${version}`],
        ...getExtendedRules(base),
    };
}

/**
 *
 * @param {boolean} strict is strict mode
 * @param {Object} base base JavaScript rules object
 * @param {2|3=} version the fallback version if cannot find the version
 * @returns {Object} the extended Vue config object

 */
function getConfig(strict, base = {}, version = getVersion(2)) {
    return {
        parser: 'vue-eslint-parser',
        parserOptions: {
            ...parserOptions,
            parser: getParser(),
        },
        plugins: ['vue'],
        overrides: [
            {
                files: ['*.vue'],
                rules: {
                    indent: 'off',
                },
            },
        ],
        rules: getRules(strict, base, version),
    };
}

module.exports = {
    getVersion,
    getRules,
    getConfig,
};
