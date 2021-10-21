'use strict';
const data = require('../data/aircraft-classes');

module.exports = function (app) {
  const express = require('express');
  let aircraftClassesRouter = express.Router();

  aircraftClassesRouter.get('/', function (req, res) {
    res.send({
      'aircraft-classes': data,
    });
  });

  aircraftClassesRouter.post('/', function (req, res) {
    res.status(201).end();
  });

  aircraftClassesRouter.get('/:id', function (req, res) {
    res.send({
      'aircraft-classes': {
        id: req.params.id
      }
    });
  });

  aircraftClassesRouter.put('/:id', function (req, res) {
    res.send({
      'aircraft-classes': {
        id: req.params.id
      }
    });
  });

  aircraftClassesRouter.delete('/:id', function (req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/aircraft-classes', require('body-parser').json());
  app.use('/api/aircraft-classes', aircraftClassesRouter);
};
