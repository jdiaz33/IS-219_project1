var mongoose = require('mongoose');
var Collection = mongoose.model('School');

exports.index = function(req, res){
	Collection.find({}, function(err, schools){
		res.render('index', {
			title: 'List of Colleges',
			schools: schools
		});
	});
}