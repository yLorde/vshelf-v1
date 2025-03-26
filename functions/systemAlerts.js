const fs = require('fs');

module.exports = function systemAlerts() {
    return fs.readFileSync('./config/system_alerts.vshelf', 'utf-8');
};