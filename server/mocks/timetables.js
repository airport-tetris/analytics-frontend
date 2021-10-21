'use strict';
const timetables = require('../data/timetables');

module.exports = function (app) {
  const express = require('express');
  let timetablesRouter = express.Router();

  timetablesRouter.get('/', function (req, res) {
    // res.send({ timetables });
    res.send({ timetables });
  });

  timetablesRouter.post('/', function (req, res) {
    res.status(201).end();
  });

  timetablesRouter.get('/:id', function (req, res) {
    res.send({
      'timetables': {
        id: req.params.id
      }
    });
  });

  timetablesRouter.put('/:id', function (req, res) {
    res.send({
      'timetables': {
        id: req.params.id
      }
    });
  });

  timetablesRouter.delete('/:id', function (req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/timetables', require('body-parser').json());
  app.use('/api/timetables', timetablesRouter);
};
