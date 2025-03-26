const fs = require('fs');

module.exports = function readVShelfFile(path) {
    return fs.readFileSync(path, 'utf-8');
};