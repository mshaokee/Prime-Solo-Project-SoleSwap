const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Routes
//GET route for Home Page
router.get('/', (req, res) => {
    console.log('in /shoes GET');
    // query string for Home page
    let queryString = `SELECT "post_id", "post_name", "post_image", "post_date", "username" FROM "post" 
                       JOIN "user" ON "post".user_id = "user".id ORDER BY "post_date" ASC LIMIT '6';`;
    pool.query(queryString).then(result => {
        console.log('back from GET:', result.rows);
        res.send(result.rows);
    }).catch(err => {
        console.log('Error in /shoes GET:', err);
        res.sendStatus(500);
    });//end pool query
});//end get route for Main Page

//GET route for Shoe Box Page
router.get('/shoebox', (req, res) => {
    console.log('in /shoes/shoebox GET');
    //query string for Shoe Box page
    let queryString = `SELECT "post_id", "post_name", "post_image", "post_date", "username" FROM "post" 
                       JOIN "user" ON "post".user_id = "user".id ORDER BY "post_date";`;
    pool.query(queryString).then(result => {
        console.log('back from /shoes/shoebox GET', result.rows);
        res.send(result.rows);
    }).catch(error => {
        console.log('Error in /shoes/shoebox GET');
        res.sendStatus(500);
    })//end pool query
    
});//end get router for Shoe Box

module.exports = router;