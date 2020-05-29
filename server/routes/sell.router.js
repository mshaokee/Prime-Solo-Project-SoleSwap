const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET for sell
router.get('/', (req, res) => {
    console.log('in /sell GET')
    let queryString = `SELECT "post".id, "post_name", "post_body", "post_image", "post_date", "username" FROM "post" 
    JOIN "user" ON "post".user_id = "user".id
    WHERE "post_cat" = 2;`
    pool.query(queryString).then((result)=>{
        res.send(result.rows);
    }).catch((err)=>{
        console.log('Error in /sell GET:', err)
        res.sendStatus(500);
    });//end pool query
});//end get router

//GET for sell details



module.exports = router;