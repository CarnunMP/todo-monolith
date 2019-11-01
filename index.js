require('dotenv').config();

const express = require('express');
const cors = require('cors');

const server = express();
const { PORT } = process.env;
const dummyData = [
  { id: 1, text: 'Hello' },
  { id: 2, text: 'World' },
];

server.use(express.static(`${__dirname}/client/build`));
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

server.get('/api/dummy', (req, res) => {
  res.json(dummyData);
});

server.listen(PORT, () => {
  console.log(`\n *Server listening on port ${PORT}* \n`);
});
