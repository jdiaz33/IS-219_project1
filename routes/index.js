//var express = require('express');
//var router = express.Router();

/* GET home page. */

//require('../models/schools');

var mongoose = require('mongoose');
var Collection = mongoose.model('School');

exports.index = function(req, res){
	//var Collection = mongoose.model('School');

	//collection.find({}, {'INSTNM': 1, '_id': 1}, function(err, schools){
	Collection.find({}, function(err, schools){
	//collection.findOne({UNITID: '100706'}, function(err,schools){
		console.log(schools);
		res.render('index', {
			title: 'List of Schools',
			schools: schools
		});
	});
}

//mongoose.connection.close();
var Collection = mongoose.model('School');

exports.college = function(req, res){
	console.log(req.params.id);
	Collection.find({UNITID: req.params.id}, function(err, course){
	//Collection.findOne({UNITID: req.param.id}, function(err, schools){
	//collection.findOne({ _id: req.params.cid}, function(err, course){
	//collection.find(fields, function(err, course){
	//collection.find
		//console.log(fields);
		res.send(course);
		console.log(course);
		res.render('college',{
			title: 'Individual Schools',
			course: course
		});
	});
}//*/

//router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
//});

//module.exports = router;
