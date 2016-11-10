'use strict';

const unifyUsername = require('./unify-username'),
      log4js        = require('log4js'),
      logger        = log4js.getLogger('queryHandler');

function queryHandler (req, res) {
  try {
    const query           = req.query,
          unifiedUsername = unifyUsername(query.username);

    return res.send(String(unifiedUsername));
  } catch (e) {
    logger.error('Fail', e);

    switch (e.message) {
      case 'Invalid username':
        res.send(e.message);
        break;
      default:
        res.sendStatus(500);
        break;
    }
  }
}

module.exports = queryHandler;
