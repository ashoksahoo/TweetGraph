var express = require('express');
var Tweet = require('../models/Tweet')
var router = express.Router();

/* GET home page. */


router.get('/', function ( req, res, next ) {
	res.render('index', {title: 'Express'});
});

router.get('/api/tweets', function ( req, res, next ) {
	var callback = function ( data, err ) {
		var tweets = [];
		var previously = Date.now() - 1000 * 60 * 9;
		var count = 0;
		for (var i = 0; i < data.length; i++) {
			if (Number(data[ i ].date) < previously) {
				count++;
			} else {
				tweets.push(count);
				count = 0;
				previously += 60000;
				i--
			}
		}
		tweets.push(count);
		for (var j = 0; j < 10 - tweets.length; i++) {
			tweets.push(0);
		}
		res.send(tweets)
	};
	Tweet.getTweets(10, callback)
});

exports.updateGraph = function ( io ) {
	var callback = function ( data, err ) {
		var tweets = [];
		if (data) {
			var previously = Date.now() - 1000 * 60 * 9;
			var count = 0;
			for (var i = 0; i < data.length; i++) {
				if (Number(data[ i ].date) < previously) {
					count++;
				} else {
					tweets.push(count);
					count = 0;
					previously += 60000;
					i--
				}
			}
			tweets.push(count);
			for (var j = 0; j < 10 - tweets.length; i++) {
				tweets.push(0);
			}
			io.emit('tweet', tweets);
		}
	};
	Tweet.getTweets(10, callback)

};
exports.router = router;
