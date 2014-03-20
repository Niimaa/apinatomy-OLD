'use strict';


////////////////////////////////////////////////////////////////////////////////
///////////////////////// Includes /////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var mongoose = require('mongoose');
var _ = require('lodash');
var vars = require('./vars');


////////////////////////////////////////////////////////////////////////////////
///////////////////////// Connect with Mongo ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

mongoose.connect(vars.dbServer, vars.dbName);


////////////////////////////////////////////////////////////////////////////////
///////////////////////// Convenience Definitions //////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function StringType(other) {
	return _.assign({
		type:    String,
		default: '',
		trim:    true
	}, other);
}

function StringEnum() {
	return {
		type: String,
		trim: true,
		enum: _.toArray(arguments)
	};
}

function EntityReference(other) {
	return StringType(_.assign({ ref: 'Entity' }, other));
}


////////////////////////////////////////////////////////////////////////////////
///////////////////////// Schemas //////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//// sub-schemas

var subEntitySchema = new mongoose.Schema({
	entity: EntityReference(),
	type:   StringEnum('regional part', 'constitutional part', 'subclass', 'seed')
});

//// main schemas

var entitySchema = new mongoose.Schema({
	_id:         StringType({ unique: true }),
	name:        StringType(),
	description: StringType(),
	sub:         [subEntitySchema]
}, { _id: false });
entitySchema.index({ externals: 1 });

var connectionSchema = new mongoose.Schema({
	from: EntityReference(),
	to:   EntityReference(),
	type: StringType()
});
connectionSchema.index({ from: 1, to: 1 }, { unique: true });
connectionSchema.index({ type: 1 });


////////////////////////////////////////////////////////////////////////////////
///////////////////////// Models ///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

exports.Entity = mongoose.model('Entity', entitySchema);
exports.Connection = mongoose.model('Connection', connectionSchema);
