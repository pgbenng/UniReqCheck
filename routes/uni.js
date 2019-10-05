const express = require("express");
const router = express.Router();
const models = require("../models");

router.post('/req', (req, res, next) => {
    const uni = req.body.uniName
    const requirement = req.body.req 

    models.Uni.create({
        name: uni,
        req: requirement
    })
    .then (result => {
        res.send(201)
    })
})

router.get('/reqSearch', (req, res, next)=>{
    models.Uni.findAll({
        limit: 1,
        where:{
            name: req.query.uniName
        },
        order: [ [ 'createdAt', 'DESC' ]]
    }).then(university=>{
        if (university) { 
            res.send(university[0])
        } else {
            res.send('')
        }
    })
})
router.get('/req', (req, res, next)=>{
    models.Uni.findAll({
        
    
        order: [ [ 'createdAt', 'DESC' ]]
    }).then(university=>{
        if (university) { 
            res.send(university);
        } else {
            res.send([]);
        }
    })
})



module.exports = router;