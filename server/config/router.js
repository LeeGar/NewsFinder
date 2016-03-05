var twitterController = require('../twitter/twitterController.js');
var userController = require('../users/userController.js');

module.exports = function (app, express) {
//gathering info from twitter
app.get('/request-token', twitterController.getRequest);
app.get('/return', twitterController.getAccess);


};