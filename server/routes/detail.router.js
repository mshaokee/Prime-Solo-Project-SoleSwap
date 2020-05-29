const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET for buy details
router.get('/buy/:id', (req, res) => {
    let id = req.params.id
    console.log('in /details/buy/:id GET')
    let queryString = `SELECT "post_id", "post_name", "post_body", "post_image", "post_date", "username" FROM "post" 
    JOIN "user" ON "post".user_id = "user".id
    WHERE "post_id" = $1;`
    pool.query(queryString, [id]).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('Error in /sell GET:', err)
        res.sendStatus(500);
    });//end pool query
});//end get router

// GET for sell details
router.get('/sell/:id', (req, res) => {
    let id = req.params.id
    console.log('in /details/sell/:id GET')
    let queryString = `SELECT "post_id", "post_name", "post_body", "post_image", "post_date", "username" FROM "post" 
    JOIN "user" ON "post".user_id = "user".id
    WHERE "post_id" = $1;`
    pool.query(queryString, [id]).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('Error in /sell GET:', err)
        res.sendStatus(500);
    });//end pool query
});//end get router

//GET for home details
router.get('/home/:id', (req, res) => {
    let id = req.params.id
    console.log('in /details/home/:id GET')
    let queryString = `SELECT "post_id", "post_name", "post_body", "post_image", "post_date", "username" FROM "post" 
    JOIN "user" ON "post".user_id = "user".id
    WHERE "post_id" = $1;`
    pool.query(queryString, [id]).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('Error in /home GET:', err)
        res.sendStatus(500);
    });//end pool query
});//end get router



module.exports = router;