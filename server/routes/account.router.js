const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET router fo account
router.get('/:id', (req, res) => {
    const id = req.params.id;
    let queryString = `
        SELECT * FROM "user"
        JOIN "post" ON "user".id = "post".user_id
        JOIN "category" ON "post".post_cat = "category".cat_id
        WHERE "id" = $1
        ORDER BY "post_id";
        `
    pool.query(queryString, [id]).then((result)=> {
        res.send(result.rows);
    }).catch((err)=> {
        console.log('Error in /accounts GET');
        res.sendStatus(500);
    });//end pool query
});//end GET for account

module.exports = router;