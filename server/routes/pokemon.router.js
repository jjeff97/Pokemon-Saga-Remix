const { response } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//get all pokemon
router.get('/', (req, res) => {
    const queryString = `SELECT * FROM pokemon`;

    pool.query(queryString)
    .then((response) => {
        res.send(response.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});

//get all types


//get pokemon with types


module.exports = router;