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

//PUT for shoe edit
router.put('/update/:id', (req, res) => {
    console.log('Back from PUT /account/edit/update/:id', req.body, req.params.id);
    let id = req.params.id;
    let postName = req.body.postName;
    let postCat = req.body.postCat;
    let description = req.body.description;
    let date = req.body.date
    let queryString = `UPDATE "post" SET post_name = $1, post_body = $2, post_cat = $3, post_date = $5 WHERE post_id = $4;`;
    pool.query(queryString, [postName, description, postCat, id, date]).then((result) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log('Error in /account/edit/update/:id PUT', err);
        res.sendStatus(500);
    });//end pool query
});//end put router



module.exports = router;