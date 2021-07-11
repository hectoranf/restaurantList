const passport = require('passport');

module.exports = app => {

    app.use('/api/restaurants', require('./restaurants.routes.js'))
    app.use('/api/user', passport.authenticate('jwt', { session: false }), require('./user.routes.js'))
    app.use('/api', require('./auth.routes.js'))
}