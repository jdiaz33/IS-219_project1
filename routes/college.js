var mongoose = require('mongoose');
var Collection = mongoose.model('School');

exports.college = function(req, res){
	Collection.find({UNITID: req.params.id}, function(err, course){ 
		res.render('college', {
			title: 'Individual School',
			course: course
		});
	});
}



