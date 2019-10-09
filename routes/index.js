const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index')
})

router.get('/intellects', (req, res, next) => {
    res.render('index')
})

router.get('/universities/:uniName/:faculty', (req, res, next) => {
    res.render('index')
})

router.get('/about-us',(req, res, next) =>{
    res.render('index')
})
module.exports = router;