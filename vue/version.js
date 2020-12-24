/* eslint-disable no-console */

/**
 * Detect the version of Vue
 *
 * @return {2|3|null} version of Vue (only 2 and 3 are currently supported)
 */
function getVersion() {
    let Vue = null;

    try {
        // eslint-disable-next-line global-require
        Vue = require('vue');
    } catch (e) {
        // do nothing
    }

    if (!Vue || typeof Vue.version !== 'string') {
        return null;
    }

    if (Vue.version.startsWith('2.')) {
        return 2;
    } else if (Vue.version.startsWith('3.')) {
        return 3;
    }

    return null;
}

let version = getVersion();
if (!version) {
    console.warn('[ecomfe/eslint-config] Vue version is not detected. Assuming Vue 2 is used.');
    version = 2;
}

module.exports = version;
