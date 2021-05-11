/* eslint-disable no-console */
const {parserOptions} = require('../index');

/**
 * Detect the version of Vue
 *
 * @returns {2|3|null} version of Vue (only 2 and 3 are currently supported)
 */
function getVersion(defaultValue) {
    try {
        // eslint-disable-next-line global-require
        const {version} = require('vue/package.json');
        if (version.startsWith('2.')) {
            return 2;
        } else if (version.startsWith('3.')) {
            return 3;
        }
    } catch (_) {
        // do nothing
    }

    if (defaultValue) {
        console.warn(`[ecomfe/eslint-config] No valid Vue version is detected. Assuming Vue ${defaultValue} is used.`);
        return defaultValue;
    }

    return null;
}

/**
 * Get derived rules from a given base JavaScript rules object
 *
 * @param {Object} base base rules
 * @returns {Object} the extended rules
 */
// eslint-disable-next-line complexity
function getExtendedRules(base) {
    return {
        'vue/array-bracket-spacing': base['array-bracket-spacing'] || 'off',
        'vue/arrow-spacing': base['arrow-spacing'] || 'off',
        'vue/block-spacing': base['block-spacing'] || 'off',
        'vue/brace-style': base['brace-style'] || 'off',
        'vue/camelcase': base.camelcase || 'off',
        'vue/comma-dangle': base['comma-dangle'] || 'off',
        'vue/dot-location': base['dot-location'] || 'off',
        'vue/eqeqeq': base.eqeqeq || 'off',
        'vue/key-spacing': base['key-spacing'] || 'off',
        'vue/keyword-spacing': base['keyword-spacing'] || 'off',
        'vue/max-len': base['max-len'] || 'off',
        'vue/no-empty-pattern': base['no-empty-pattern'] || 'off',
        'vue/no-irregular-whitespace': base['no-irregular-whitespace'] || 'off',
        'vue/no-restricted-syntax': base['no-restricted-syntax'] || 'off',
        'vue/object-curly-spacing': base['@babel/object-curly-spacing'] || 'off',
        'vue/space-infix-ops': base['space-infix-ops'] || 'off',
        'vue/space-unary-ops': base['space-unary-ops'] || 'off',
    };
}

const basicRules = {
    v2: {
        'vue/no-custom-modifiers-on-v-model': 'error',
        'vue/no-multiple-template-root': 'error',
        'vue/no-v-for-template-key': 'error',
        'vue/no-v-model-argument': 'error',
        'vue/valid-v-bind-sync': 'error',
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
        'vue/no-setup-props-destructure': 'error',
        'vue/no-v-for-template-key-on-child': 'error',
        'vue/no-watch-after-await': 'error',
        'vue/require-slots-as-functions': 'error',
        'vue/require-toggle-inside-transition': 'error',
        'vue/return-in-emits-validator': 'error',
        'vue/valid-v-is': 'error',
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
                multiline: {
                    max: 2,
                    allowFirstLine: false,
                },
            },
        ],
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
        'vue/component-tags-order': [
            'warn',
            {
                order: ['template', 'script', 'style'],
            },
        ],
        'vue/no-deprecated-scope-attribute': 'off',
        'vue/no-deprecated-slot-attribute': 'off',
        'vue/no-deprecated-slot-scope-attribute': 'off',
        'vue/no-reserved-component-names': 'error',
        'vue/no-unsupported-features': 'off',
        'vue/require-direct-export': 'off',
        'vue/script-indent': [
            'error',
            4,
            {
                switchCase: 1,
            },
        ],
    },
};

const strictRules = {
    v2: {
        ...basicRules.v2,
    },
    v3: {
        ...basicRules.v3,
        'vue/require-explicit-emits': 'error',
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
    },
};

/**
 * Try to resolve parser for script blocks
 * TypeScript > Babel
 * @returns path for the resolved parser
 */
function getParser() {
    try {
        return require.resolve('@typescript-eslint/parser');
    } catch (e) {
        return require.resolve('@babel/eslint-parser');
    }
}


/**
 *
 * @param {boolean} strict is strict mode
 * @param {Object} base base JavaScript rules object
 * @returns {Object} the extended Vue rules object
 */
function getRules(strict, base = {}, version = getVersion(2)) {
    const config = strict ? strictRules : basicRules;

    return {
        ...config.common,
        ...config[`v${version}`],
        ...getExtendedRules(base),
    };
}

/**
 *
 * @param {boolean} strict is strict mode
 * @param {Object} base base JavaScript rules object
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
