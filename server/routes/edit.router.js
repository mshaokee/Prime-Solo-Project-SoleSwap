const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET for account to edit
router.get('/:id', (req, res) => {
    let id = req.params.id;
    console.log('in /account/edit/:id GET');
    let queryString = `
        SELECT * FROM "user"
        JOIN "post" ON "user".id = "post".user_id
        JOIN "category" ON "post".post_cat = "category".cat_id
        WHERE "post_id" = $1;
        `
    pool.query(queryString, [id]).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('Error in /account/edit/:id :', err);
        res.sendStatus(500);
    });//end pool query
});//end get router



module.exports = router;