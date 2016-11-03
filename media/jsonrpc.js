var addMedia = require("../media").addMedia;

addMedia({
	"content-type": "application/json+jsonrpc",
	serialize: function(results,options){
		console.log("JSON RPC Serialize Results: ", results);
		return JSON.stringify({id: 1,result: results.getData()});
	}
})
