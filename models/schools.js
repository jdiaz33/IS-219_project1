var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schoolSchema = new Schema({
	UNITID : Number,
	INSTNM : String,
	ADDR : String,
	CITY : String,
	STABBR : String,
	ZIP : Number,
	FIPS : Number,
	OBEREG : Number,
	CHFNM : String,
	CHFTITLE : String,
	GENTELE : Number,
	FAXTELE : Number,
	EIN : Number,
	OPEID : Number,
	OPEFLAG : Number,
	WEBADDR : String,
	ADMINURL : String,
	FAILDURL : String,
	APPLURL : String
	NPRINCURL : String
})