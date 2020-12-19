const express = require('express');
const router = express.Router();
const path = require('path');

function route({ app }) {
  router.get('/latest', v1);
  router.get('/v1', v1);
  router.get('/', v1);
  
  async function v1 (request, response) {
    response.sendFile(path.join(__dirname + '/../index.html'));
  }
  return router;
}

module.exports = route;