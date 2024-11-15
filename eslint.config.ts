import {configure, Options} from './dist/index.js';

const options: Options = {
    strict: true,
    typeScript: {typeCheck: true},
    import: {},
};
export default configure(options);
