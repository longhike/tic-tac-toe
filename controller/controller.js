const express = require('express');
const router = express.Router();

router
    .get('/', (req, res) => {
        res.sendFile('index');
    })
    .get('/ping', (req, res) => {
        res.send('pong');
    })

module.exports = router;