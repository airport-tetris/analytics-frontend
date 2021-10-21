'use strict';
const data = require('../data/handling-rates');

module.exports = function(app) {
  const express = require('express');
  let handlingRatesRouter = express.Router();

  handlingRatesRouter.get('/', function(req, res) {
    res.send({
      'handling-rates': data,
    });
  });

  handlingRatesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  handlingRatesRouter.get('/:id', function(req, res) {
    res.send({
      'handling-rates': {
        id: req.params.id
      }
    });
  });

  handlingRatesRouter.put('/:id', function(req, res) {
    res.send({
      'handling-rates': {
        id: req.params.id
      }
    });
  });

  handlingRatesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/handling-rates', require('body-parser').json());
  app.use('/api/handling-rates', handlingRatesRouter);
};
