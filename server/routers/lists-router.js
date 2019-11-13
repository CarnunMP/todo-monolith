const express = require('express');

const Lists = require('../models/lists-model');

const router = express.Router();

router.get('/', (req, res) => {
  Lists.find()
    .then(lists => {
      res.status(200).json(lists);
    })
    .catch(err => {
      res.status(500).json({
        message: `Failed to GET lists: ${err.message}`,
      });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Lists.findById(id)
    .then(list => {
      if (list && list.length > 0) {
        res.status(200).json(list);
      } else {
        res.status(401).json({
          message: `There is no list with an id of ${id}.`,
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: `Failed to get list by id: ${err.message}.`,
      });
    });
});

router.get('/:id/todos', (req, res, next) => {
  const { id } = req.params;

  Lists.findById(id)
    .then(list => {
      if (list && list.length > 0) {
        req.listId = id;
        next();
      } else {
        res.status(401).json({
          message: `There is no list with an id of ${id}.`,
        });
      }
    });
});

module.exports = router;