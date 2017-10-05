var addMedia = require("../media").addMedia;
var Result = require("../result");
var through2 = require("through2");
var JsonStreamer = require("./_jsonstream");

addMedia({
	"content-type": "application/json",
	serialize: function(results,options){
		if (results instanceof Result){
			results = results.getData();	
		}

		if (!results){
			results=""
		}

		//return new JsonStreamer(results.results||results);
		return JSON.stringify(results.results || results);
	}
})



addMedia({
	"content-type": "text/json",
	serialize: function(results,options){
		var metadata;
		if (results instanceof Result){
			results = results.getData();	
			metadata = results.getMetadata();
		}

		if (!results){
			results=""
		}

		return JSON.stringify(results.results || results, null, 4);

	}
})


