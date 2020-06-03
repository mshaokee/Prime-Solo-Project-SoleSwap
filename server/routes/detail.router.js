const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET for buy details
router.get('/buy/:id', (req, res) => {
    let id = req.params.id
    console.log('in /details/buy/:id GET')
    let queryString = `SELECT "post_id", "post_name", "post_body", "post_image", "post_date", "username" FROM "post" 
    JOIN "user" ON "post".user_id = "user".id
    WHERE "post_id" = $1;`
    pool.query(queryString, [id]).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('Error in /details/buy GET:', err)
        res.sendStatus(500);
    });//end pool query
});//end get router

// GET for sell details
router.get('/sell/:id', (req, res) => {
    let id = req.params.id
    console.log('in /details/sell/:id GET')
    let queryString = `SELECT "post_id", "post_name", "post_body", "post_image", "post_date", "username" FROM "post" 
    JOIN "user" ON "post".user_id = "user".id
    WHERE "post_id" = $1;`
    pool.query(queryString, [id]).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('Error in /details/sell GET:', err)
        res.sendStatus(500);
    });//end pool query
});//end get router

//GET for home details
router.get('/home/:id', (req, res) => {
    let id = req.params.id;
    console.log('in /details/home/:id GET');
    let queryString = `SELECT "post_id", "post_name", "post_body", "post_image", "post_date", "username", "cat_name" FROM "post" 
    JOIN "user" ON "post".user_id = "user".id
    JOIN "category" ON "post".post_cat = "category".cat_id
    WHERE "post_id" = $1;`
    pool.query(queryString, [id]).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('Error in /details/home GET:', err)
        res.sendStatus(500);
    });//end pool query
});//end get router

//GET for trade details
router.get('/trade/:id', (req, res) => {
    let id = req.params.id;
    console.log('in /details/trade/:id GET');
    let queryString = `SELECT "post_id", "post_name", "post_body", "post_image", "post_date", "username" FROM "post" 
    JOIN "user" ON "post".user_id = "user".id
    WHERE "post_id" = $1;`
    pool.query(queryString, [id]).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('Error in /details/trade :', err);
        res.sendStatus(500);
    });//end pool query
});//end get router

//GET for all details
router.get('/all/:id', (req, res) => {
    let id = req.params.id;
    console.log('in /details/all/:id GET');
    let queryString = `SELECT "post_id", "post_name", "post_body", "post_image", "post_date", "username" FROM "post" 
    JOIN "user" ON "post".user_id = "user".id
    WHERE "post_id" = $1;`
    pool.query(queryString, [id]).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('Error in /all/trade :', err);
        res.sendStatus(500);
    });//end pool query
});//end get router


module.exports = router;