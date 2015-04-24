module.exports = function (app) {

	var index = require('./routes/index');
	var college = require('./routes/college');
	var users = require('./routes/users');

	app.get('/', index.index);
	app.get('/:id', college.college);
	//app.get('/:id', index.college);
}