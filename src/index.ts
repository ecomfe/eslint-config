import {configureBase} from './base.js';
import {configureImport, type ImportConfigOptions} from './import.js';
import {configureReact, type ReactConfigOptions} from './react.js';
import {configureTypeScript, type TypeScriptConfigOptions} from './typeScript.js';

type OmitStrict<T> = Omit<T, 'strict'>;

export interface Options {
    strict?: boolean;
    import?: OmitStrict<ImportConfigOptions>;
    react?: OmitStrict<ReactConfigOptions>;
    typeScript?: OmitStrict<TypeScriptConfigOptions>;
}

function spread(options: Options, key: Exclude<keyof Options, 'strict'>) {
    return {strict: options.strict, ...options[key]};
}

export function configure(options: Options = {}) {
    return [
        ...configureBase({strict: options.strict}),
        ...(options.import ? configureImport(spread(options, 'import')) : []),
        ...(options.react ? configureReact(spread(options, 'react')) : []),
        ...(options.typeScript ? configureTypeScript(spread(options, 'typeScript')) : []),
    ];
}
