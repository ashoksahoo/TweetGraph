var Tweet = require('./models/Tweet');
var routes = require('./routes/index');

module.exports = function ( data, io ) {


	// Construct a new tweet object
	var tweet = {
		twid: data[ 'id' ],
		active: false,
		author: data[ 'user' ][ 'name' ],
		avatar: data[ 'user' ][ 'profile_image_url' ],
		body: data[ 'text' ],
		date: data[ 'created_at' ],
		screenname: data[ 'user' ][ 'screen_name' ]
	};

	var tweetEntry = new Tweet(tweet);

	tweetEntry.save(function ( err ) {
		if (!err) {
			routes.updateGraph(io);
		}
	});


};