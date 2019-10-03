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

router.get('/req', (req, res, next)=>{
    models.Uni.findOne({     
        where:{
            name: req.query.uniName

        }
    }).then(university=>{
        console.log(university)
        res.send(university)
    })
})


module.exports = router;