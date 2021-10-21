'use strict';
const data = require('../data/aircraft-stands');

module.exports = function(app) {
  const express = require('express');
  let aircraftStandsRouter = express.Router();

  aircraftStandsRouter.get('/', function(req, res) {
    res.send({
      'aircraft-stands': data,
    });
  });

  aircraftStandsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  aircraftStandsRouter.get('/:id', function(req, res) {
    res.send({
      'aircraft-stands': {
        id: req.params.id
      }
    });
  });

  aircraftStandsRouter.put('/:id', function(req, res) {
    res.send({
      'aircraft-stands': {
        id: req.params.id
      }
    });
  });

  aircraftStandsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/aircraft-stands', require('body-parser').json());
  app.use('/api/aircraft-stands', aircraftStandsRouter);
};
