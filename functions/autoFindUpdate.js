const fs = require('fs');

module.exports = function autoFindUpdate() {
    return fs.readFileSync('./config/auto_update.vshelf', 'utf-8');
}