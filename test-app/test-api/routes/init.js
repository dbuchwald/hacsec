var uid = require('uid-safe');
var express = require('express');
var redis = require('redis');
var router = express.Router();

router.post('/', function (req, res, next) {
	const requestBody = req.body;
	var loginResponse = { success: false, sessionId: null};
	loginResponse.success = true;
	loginResponse.sessionId = uid.sync(18);
	res.locals.redisClient.set(loginResponse.sessionId, requestBody.id);
			res.send(JSON.stringify({ "status": 200, "error": null, "response": loginResponse }));
});

router.get('/sessions', function (req, res, next) {
	res.locals.redisClient.keys('*', function(err, replies) {
    res.send(JSON.stringify({ "status": 200, "error": null, "response": replies}));
	});
});

module.exports = router;