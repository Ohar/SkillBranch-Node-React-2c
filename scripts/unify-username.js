'use strict';

const log4js = require('log4js'),
      last   = require('lodash/last'),
      logger = log4js.getLogger('unifyUsername');

function unifyUsername (username) {
  logger.trace('Start', username);

  const usernameWithoutQuery    = username.split('?')[0],
        usernameWithoutProtocol = last(usernameWithoutQuery.split('//')),
        hasSlash                = /\//.test(usernameWithoutProtocol);

  const unifiedUsername = (
    hasSlash
      ? usernameWithoutProtocol.split('/')[1]
      : usernameWithoutProtocol
  )
    .replace(/@/g, '');

  logger.trace('Done', unifiedUsername);

  if (unifiedUsername) {
    return `@${unifiedUsername}`;
  } else {
    throw new Error('Invalid username');
  }
}

module.exports = unifyUsername;
