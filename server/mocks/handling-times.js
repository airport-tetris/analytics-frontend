'use strict';
const data = require('../data/handling-times');

module.exports = function(app) {
  const express = require('express');
  let handlingTimesRouter = express.Router();

  handlingTimesRouter.get('/', function(req, res) {
    res.send({
      'handling-times': data,
    });
  });

  handlingTimesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  handlingTimesRouter.get('/:id', function(req, res) {
    res.send({
      'handling-times': {
        id: req.params.id
      }
    });
  });

  handlingTimesRouter.put('/:id', function(req, res) {
    res.send({
      'handling-times': {
        id: req.params.id
      }
    });
  });

  handlingTimesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/handling-times', require('body-parser').json());
  app.use('/api/handling-times', handlingTimesRouter);
};
