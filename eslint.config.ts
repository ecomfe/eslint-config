import type {Options} from './dist/index.js';
import {configure} from './dist/index.js';

const options: Options = {
    strict: true,
    typeScript: {typeCheck: true},
    import: {},
};
export default configure(options);
