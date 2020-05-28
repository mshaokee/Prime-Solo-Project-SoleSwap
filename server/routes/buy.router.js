const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET route for buy page
router.get('/', (req, res) => {
    console.log('in /buy GET');
    let queryString = `SELECT "post".id, "post_name", "post_body", "post_image", "post_date", "username" FROM "post" 
    JOIN "user" ON "post".user_id = "user".id
    WHERE "post_cat" = 1;`
    pool.query(queryString).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('Error in /buy GET:', err);
        res.sendStatus(500);
    });//end query pool
});//end get router for buy page



module.exports = router;