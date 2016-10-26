var PrivilegeFacet = require("./privilege");
var util=require("util");


var Facet = module.exports = function(){
	PrivilegeFacet.call(this);
}		

util.inherits(Facet,PrivilegeFacet);

Facet.prototype.permissive=true;
