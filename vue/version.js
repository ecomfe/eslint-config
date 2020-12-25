/* eslint-disable no-console */

/**
 * Detect the version of Vue
 *
 * @return {2|3|null} version of Vue (only 2 and 3 are currently supported)
 */
function getVersion() {
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

    return null;
}

let version = getVersion();
if (!version) {
    console.warn('[ecomfe/eslint-config] No valid Vue version is detected. Assuming Vue 2 is used.');
    version = 2;
}

module.exports = version;
