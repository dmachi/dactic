var addMedia = require("../media").addMedia;
var Result = require("../result");

addMedia({
	"content-type": "application/json",
	serialize: function(results,options){
		if (results instanceof Result){
			results = results.getData();	
		}

		if (!results){
			results=""
		}

		return JSON.stringify(results.results || results);
	}
})

addMedia({
	"content-type": "text/json",
	serialize: function(results,options){
		if (results instanceof Result){
			results = results.getData();	
		}

		if (!results){
			results=""
		}

		return JSON.stringify(results.results||results,null,4);
	}
})


