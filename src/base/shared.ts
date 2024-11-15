import env from 'globals';
import type {Linter} from 'eslint';

export const parserOptions: Linter.ParserOptions = {
    sourceType: 'module',
    ecmaFeatures: {
        jsx: true,
    },
    requireConfigFile: false,
};

export const globals: Linter.Globals = {
    ...env.browser,
    ...env.node,
    ...env.es2024,
    ...env.worker,
    ...env.commonjs,
    ...env.jest,
};
