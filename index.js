const expressStatsD = require('express-statsd');

module.exports = function(app, config, _ipcheck) {
    app.use((req, res, next) => {
        req.statsdKey = "nastyhosts";
        next();
    });
    app.use(expressStatsD());
}
