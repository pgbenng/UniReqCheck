const express = require("express");
const router = express.Router();
const models = require("../models");

router.post('/req', (req, res, next) => {
    const uni = req.body.uniName
    const requirement = req.body.req 
    const faculty = req.body.faculty

    console.log(uni, requirement, faculty)

    models.University.findOrCreate({
        where: {
            name: uni,
        }
    })
    .then(result => {
        result = result[0];
        models.Faculty.create({
            name: faculty,
            reqs: requirement,
            uniId: result.dataValues.id
        })
        .then(uni=>{
            res.send(201)
        })
    })
})

router.post('/about-us-submit', (req, res, next) => {
    const bodyText = req.body.aboutBody;

    models.AboutUs.create({
        text: bodyText
    })
    .then(result=> {
        res.send(201)
    })

})

router.get('/about-us-submit', (req, res, next) => {
    models.AboutUs.findAll({
        limit: 1,
        order: [ [ 'createdAt', 'DESC' ]]
    })
    .then (result => {
        res.send(result[0].text)
    })
})


router.get('/reqSearch', (req, res, next)=>{
    models.University.findAll({
        limit: 1,
        where:{
            name: req.query.uniName,
            
        },
        include:{
            model:models.Faculty,
            where:{
                name: req.query.faculty
            }
        },
        order: [ [ 'createdAt', 'DESC' ]]
    }).then(university=>{
        console.log(university)
        if (university) { 
            res.send(university[0].dataValues.Faculties[0])
        } else {
            res.send('')
        }
    })
})
router.get('/req', (req, res, next)=>{
    models.University.findAll({
        include:{
            model:models.Faculty,
            
        },
        
    
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