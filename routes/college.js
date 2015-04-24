var mongoose = require('mongoose');
var Collection = mongoose.model('School');

exports.college = function(req, res){
	//var Collection = mongoose.model('College');
	//console.log(req.params.id);
	//var id = req.params.id;
	//console.log(id);
	//var algo = collection.where('UNITID').equals('id');
	//console.log(algo);
	//collection.findOne({}, function(err, course){
	//collection.findOne({_id: req.params._id}).lean().exec(function(err, college){
	//collection.findById({_id: req.params.ID}, function(err, course){
	//collection.find({_id: req.params.cid}, function(err, rec){
	//Collection.findOne({UNITID: 'id'}, function(err, course){
	Collection.find({UNITID: req.params.id}, function(err, course){ 
		//if(err){console.log(err);}
		//else{mongoose.connection.close();
		console.log(course);
		//console.log(college);
		//res.send(course);
		//res.send(course);
		res.render('college', {
			title: 'Individual School',
			//name: course.INSTNM,
			//address: course.ADDR
			//name: course.INSTNM,
			//course: college
			
		});
		console.log(req.params.id);
		//}
		//console.log(course.INSTNM);
	});
	//res.render('college', {
	//	title: 'Individual School'
	//});
}



