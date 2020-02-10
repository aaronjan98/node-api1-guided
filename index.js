const express = require('express'); //CommonJS Modules

const Hubs = require('./data/hubs-model.js');

const server = express();

server.get(`/`,(req, res) => {
  res.json({ Hello: `Web26` })
})

server.get(`/api/hubs`, (req, res) => {
  Hubs.find().then(hubs => {
    res.status(200).json(hubs);
  }).catch(err => {
    console.log(err);
    res.status(500).json({ errorMessage: `whoops` })
  });
})

const port = 5000;
server.listen(port, () => console.log(`/n** API on port ${port} /n`));