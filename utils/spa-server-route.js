var path = require('path');

module.exports = function (file) {
  return function (request, response, next) {
    if (request.method === 'GET' && request.accepts('html')) {
      response.sendFile(file);
    } else {
      next();
    }
  };
};
