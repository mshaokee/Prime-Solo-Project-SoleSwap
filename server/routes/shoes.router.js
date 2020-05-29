const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Routes
//GET route for Home Page
router.get('/', (req, res) => {
    console.log('in /shoes GET');
    // query string for Home page
    let queryString = `SELECT "post_id", "post_name", "post_image", "post_body", "post_date", "username" FROM "post" 
                       JOIN "user" ON "post".user_id = "user".id ORDER BY "post_date" ASC LIMIT '6';`;
    pool.query(queryString).then(result => {
        console.log('back from GET:', result.rows);
        res.send(result.rows);
    }).catch(err => {
        console.log('Error in /shoes GET:', err);
        res.sendStatus(500);
    });//end pool query
});//end get route for Main Page

//GET route for all shoes
router.get('/all', (req, res) => {
    console.log('in /all GET')
    let queryString =
        `SELECT * FROM "post"
    JOIN "user" ON "post".user_id = "user".id
    JOIN "category" ON "post".post_cat = "category".cat_id
    ORDER BY "post_id" DESC;`

    pool.query(queryString).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('Error in /shoes/all GET:', err)
        res.sendStatus(500);
    });//end pool query
});//end get router

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

//POST route for creating posts
router.post('/addShoe', (req, res) => {
    console.log('in /shoes/addShoe POST', req.body);
    let image = req.body.image;
    let description = req.body.description;
    let id = req.body.user;
    let catId = req.body.catId;
    let title = req.body.title;
    //queryString
    let queryString = `INSERT INTO "post" ("post_name", "post_body", "post_image", "post_cat", "user_id")
                       VALUES ($1, $2, $3, $4, $5);`
    pool.query(queryString, [title, description, image, catId, id]).then((result)=> {
        res.sendStatus(201);
    }).catch((error)=> {
        res.sendStatus(500);
        console.log('Error in /shoes/addShoe:', error)
    })
});//end post route


module.exports = router;