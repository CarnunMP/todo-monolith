const express = require('express');
const cors = require('cors');

const server = express();

const listsRouter = require('./routers/lists-router');
const todosRouter = require('./routers/todos-router');

server.use(express.static(`${__dirname}/../client/build`));
server.use(express.json());
server.use(cors());

server.use('/lists', listsRouter);
server.use('/lists/:id/todos', todosRouter);

server.get('/', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

// const dummyData = [
//   { id: 1, text: 'Hello' },
//   { id: 2, text: 'World' },
// ];

// server.get('/api/dummy', (req, res) => {
//   res.json(dummyData);
// });

module.exports = server;
