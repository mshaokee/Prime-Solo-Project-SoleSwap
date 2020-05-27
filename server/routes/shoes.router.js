const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Routes
//GET route for Main Page
router.get('/', (req, res) => {
    console.log('in /shoes GET');
    // query string for DB
    let queryString = 'SELECT "post_id", "post_name", "post_image", "username" FROM "post" JOIN "user" ON "post".user_id = "user".id;';
    pool.query(queryString).then((result) => {
        console.log(result);
        res.send(result.rows);
    }).catch((err) => {
        console.log('Error in /shoes GET:', err);
        res.sendStatus(500);
    });//end pool query
});//end get route for Main Page