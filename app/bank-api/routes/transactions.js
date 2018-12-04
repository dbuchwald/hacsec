var express = require('express');
var { createNewTransaction } = require('../common/db/transactions');
var { getCustomerIdFromSession, validateCustomerSession } = require('../common/redis/sessions');
var { sendCorrectResult, sendErrorMessage } = require('../common/http/handler');
var { STANDARD_ACCESS_DENIED_ERROR } = require('../common/app/errors');
var router = express.Router();

router.post('/', function (req, res) {
  const requestBody = req.body;
  const sessionId = req.headers.sessionid;
  var fetchedCustomerId;
  if (sessionId) {
    getCustomerIdFromSession(res.locals.redisClient, sessionId)
      .then( customerId => fetchedCustomerId = customerId)
      .then( validateCustomerSession(res.locals.redisClient, sessionId, fetchedCustomerId) )
      .then( success => success ? createNewTransaction(res.locals.connection, requestBody.account_id, new Date().toLocaleString(), requestBody.amount, requestBody.description, requestBody.target_iban) : Promise.reject(STANDARD_ACCESS_DENIED_ERROR))
      .then( results => sendCorrectResult(res, results) )
      .catch( error => sendErrorMessage(res, error) )
  } else {
    sendErrorMessage(res, STANDARD_ACCESS_DENIED_ERROR);
  }
});

module.exports = router;