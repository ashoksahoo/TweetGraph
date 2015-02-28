var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	twid: String,
	active: Boolean,
	author: String,
	avatar: String,
	body: String,
	date: Date,
	screenname: String
});

schema.statics.getTweets = function ( last, callback ) {
	var previously = Date.now() - last * 60 * 1000;
	Tweet.find({date: {$gte: previously}}, '_id date')
		.sort({date: 1})
		.exec(function ( err, result ) {
			if (err) {
				callback(null, err);
				return console.error(err);
			}
			else {
				callback(result);
			}
		});
};


module.exports = Tweet = mongoose.model('Tweet', schema);