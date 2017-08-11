var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://maazupial:Supersonic1@ds123933.mlab.com:23933/star-wars-quotes' || 'mongodb://localhost:27017/TodoApp');
// mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports.mongoose = {mongoose};
