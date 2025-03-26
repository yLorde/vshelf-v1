const fs = require('fs');

module.exports = function writeVShelfFile(path, txt) {
    fs.writeFileSync(path, txt, 'utf-8', (func) => { })
};