var mongoose = require('mongoose');

exports.college = function(req, res, next){
	res.render('college', {
		title: 'Individual School'
	});
}