var parser = require("rql/parser");
var EventEmitter = require('events').EventEmitter;
var util=require("util");

var Store = module.exports = function(id, options) {
	console.log("StoreBase ctor: ", id, options);
	EventEmitter.call(this);
	this.id = id;
	this.options=options;
	this.init();
}

util.inherits(Store, EventEmitter);

Store.prototype.setSchema=function(schema){
	this.schema=schema;
}

Store.prototype.parseQuery=function(query,opts){
	// IMPLEMENT IN SUBCLASS		
}

Store.prototype.get=function(id,opts){
	// IMPLEMENT IN SUBCLASS		
}

Store.prototype.query=function(query, opts){
	// IMPLEMENT IN SUBCLASS		
}

Store.prototype.put=function(obj, opts){
	// IMPLEMENT IN SUBCLASS		
}

Store.prototype["delete"]=function(id, opts){
	// IMPLEMENT IN SUBCLASS		
}

