var h = require("./redditHelper.js"),
	that = {};

exports.cookie = null;
exports.modhash = null;

var Reddit = function(uA, cookie, modhash){
	var helper = new h(that, exports.cookie, exports.modhash);
	that = helper.reset();
	that.userAgent = uA || that.userAgent;

	if(cookie) exports.cookie = cookie;
	if(modhash) exports.modhash = modhash;

	return this;
};


Reddit.prototype.random = function(callback){
	that.random = true;
	if(typeof callback == "function") this.exec(callback);
	else return this;
};

Reddit.prototype.related = function(callback){
	that.related = true;
	if(typeof callback == "function") this.exec(callback);
	else return this;
};

var filters = [
	"overview", "comments", "submitted", "liked", "disliked", "hidden", "saved", // User
	"hot", "new", "rising", "controversial", "top", "gilded", "promoted" // Subreddit
];

filters.forEach(function(filter){
	Reddit.prototype[filter] = function(callback){
		if(that.filter) throw new Error("Only one filter can be applied.");
		else{ if(filter == "promoted") that.filter = "ads"; else that.filter = filter; }
		if(typeof callback == "function") this.exec(callback);
		else return this;
	}
});

var queries = ["after", "before", "count", "from", "limit", "sort"];

queries.forEach(function(query){
	Reddit.prototype[query] = function(value, callback){
		if(query == "from") that.query.t = value;
		else that.query[query] = value;
		if(typeof callback == "function") this.exec(callback);
		else return this;
	}
});

Reddit.prototype.search = function(query, callback){
	that.query.q = query;
	if(typeof callback == "function") this.exec(callback);
	else return this;
};

Reddit.prototype.exec = function(callback){
	var helper = new h(that, exports.cookie, exports.modhash);
	if(typeof callback == "function"){
		if(that.login || that.subscribe || that.postage.do){
			exports.cookie = helper.cookie;
			exports.modhash = helper.modhash;
			helper.login(function(data){
				callback(data);
				that = helper.reset();
			})
		}else if(
			that.username || 
			(that.subreddit && !that.subscribe && !that.postage.do) || 
			that.comments || 
			that.multireddit || 
			that.query.q != null || 
			that.random || 
			(that.related && that.postId)){
			helper.getStuff(function(data){
				callback(data);
				that = helper.reset();
			});
		}else if(that.related && !that.url) throw new Error("No url specified.");
		else if((that.postId || that.commentId) && that.delete){
			helper.deleteStuff(function(data){
				callback(data);
				that = helper.reset();
			});
		}
		else if(!that.subreddit && that.postId) throw new Error("No subreddit specified.");
		else if(that.postage.do){
			helper.postStuff(function(data){
				callback(data);
				that = helper.reset();
			});
		}else throw new Error("Something went terribly wrong.");
	}else{
		throw new Error("Please specify a callback.");
		that = helper.reset();
		return true;
	}
};

module.exports = Reddit;
