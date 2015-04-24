var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schoolSchema = new Schema({
	_id : String,
	UNITID : String,
	INSTNM : String,
	ADDR : String,
	CITY : String,
	STABBR : String,
	ZIP : Number,
	FIPS : Number,
	OBEREG : Number
	/*CHFNM : String,
	CHFTITLE : String,
	GENTELE : Number,
	FAXTELE : Number,
	EIN : Number,
	OPEID : Number,
	OPEFLAG : Number,
	WEBADDR : String,
	ADMINURL : String,
	FAILDURL : String,
	APPLURL : String,
	NPRINCURL : String*/
});

/*var schoolRecordSchema = new Schema({
	_id: String,
	UNITID : String, 
	INSTNM : String
});

mongoose.model('College', schoolRecordSchema, 'schoolList');*/

mongoose.model('School', schoolSchema, 'schoolList');