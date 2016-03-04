const expressStatsD = require('express-statsd');

module.exports = function(app, config, _ipcheck) {
    app.use(expressStatsD());
}
