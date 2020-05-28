const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET route for buy page
router.get('/', (req, res) => {
    console.log('in /buy GET');
    let queryString = 'SELECT * FROM "post" WHERE "post_cat" = 1'
    pool.query(queryString).then((result)=>{
        res.send(result.rows);
    }).catch((err)=> {
        console.log('Error in /buy GET:', err);
        res.sendStatus(500);
    });//end query pool
});//end get router for buy page



module.exports = router;