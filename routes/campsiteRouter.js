const express = require('express')
const campsiteRouter = express.Router()

campsiteRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})

.get((req, res) => {
    res.end('Will send all the campsites to you')
})

.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} containing description: ${req.body.description}`);
})

.put((req, res) => {
    res.statusCode = 403;
    res.end('Put operation not suported on /campsites')
})

.delete((req, res) => {
    res.end('Deleting all campsites')
});

module.exports = campsiteRouter