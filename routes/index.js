const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index')
})

router.get('/benisdumb', (req, res, next) => {
    res.render('index')
})

router.get('/universities/:uniName/:faculty', (req, res, next) => {
    res.render('index')
})

router.get('/about-us',(req, res, next) =>{
    res.render('index')
})

router.get('/fee-calculator', (req, res, next) => {
    res.render('index')
})

router.get('/universities/:uniName', (req, res, next) => {
    res.render('index')
})
module.exports = router;