const express = require('express');

const Todos = require('../models/todos-model');

const router = express.Router();

router.get('/', (req, res) => {
  const { listId } = req;

  Todos.findByListId(listId)
    .then(todos => {
      res.status(200).json(todos);
    })
    .catch(err => {
      res.status(500).json({
        message: `Failed to GET todos: ${err.message}.`,
      });
    });
});



module.exports = router;