var addMedia = require("../media").addMedia;
var Result = require("../result");


function getProperties(items){
	var props = {};
	items.forEach(function(item){
		Object.keys(item).forEach(function(prop){
			props[prop]=true;
		});
	});
	return Object.keys(props).sort();
}

var toColumn = function(obj){
	var out;
	if (typeof obj == "undefined") {
		out = "";
	}else if (obj instanceof Array){
		out = obj.map(toColumn).join(",");
	}else if (typeof obj == "object") {
		out = JSON.stringify(obj);	
	}else{
		out = obj;
	}
	return out;
}

addMedia({
	"content-type": "application/tsv",
	serialize: function(results,options){
		if (results instanceof Result){
			results = results.getData();	
		}

		if (!results){
			results=""
		}
	
		console.log("Results to Serialize: ", results);
		if (results instanceof Array){
			var out = [];
			var props = getProperties(results);
			out.push(props.join("\t"));
			console.log("Props: ", props);
			results.forEach(function(item){
				console.log("item: ", item);
				var row = []
				props.forEach(function(prop){
					row.push(toColumn(item[prop]));
				});
				out.push(row.join("\t"));
			});				

			return out.join("\n");
		}else{
			throw Error("Serialization to TSV must be an array");
		}


	}
})


