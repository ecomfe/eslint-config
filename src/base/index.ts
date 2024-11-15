import type {Linter} from 'eslint';
import baseDefault from './default.js';
import baseStrict from './strict.js';

export interface BaseConfigOptions {
    strict?: boolean;
}

export function configureBase({strict = false}: BaseConfigOptions = {}): Linter.Config[] {
    return strict ? baseStrict : baseDefault;
}
