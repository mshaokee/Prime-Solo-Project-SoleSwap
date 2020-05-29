const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET for sell
router.get('/', (req, res) => {
    console.log('in /sell GET')
    let queryString = 
    // `SELECT "post_id", "post_name", "post_body", "post_image", "post_date", "username" FROM "post" 
    // JOIN "user" ON "post".user_id = "user".id
    // WHERE "post_cat" = 2;`
    `SELECT * FROM "post"
    JOIN "user" ON "post".user_id = "user".id
    JOIN "category" ON "post".post_cat = "category".cat_id
    ORDER BY "post_id";`
    
    pool.query(queryString).then((result)=>{
        res.send(result.rows);
    }).catch((err)=>{
        console.log('Error in /sell GET:', err)
        res.sendStatus(500);
    });//end pool query
});//end get router

//GET for sell details
router.get('/detail/:id', (req, res) => {
    let id = req.params.id
    console.log('in /sell/detail/:id GET')
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



module.exports = router;