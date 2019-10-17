const express = require("express");
const router = express.Router();
const models = require("../models");

router.post("/req", (req, res, next) => {
  const uni = req.body.uniName;
  const requirement = req.body.req;
  const faculty = req.body.faculty;
  const info = req.body.info;

  models.University.findOrCreate({
    where: {
      name: uni
    }
  }).then(resultant => {
      console.log(info, resultant[0].dataValues, "line 16")
    models.UniInfo.create({
      info: info,
      uniId: resultant[0].dataValues.id
    }).then(result => {
      models.Faculty.create({
        name: faculty,
        reqs: requirement,
        uniId: resultant[0].dataValues.id
      }).then(uni => {
        res.send(201);
      });
    });
  });
});

router.post("/about-us-submit", (req, res, next) => {
  const bodyText = req.body.aboutBody;

  models.AboutUs.create({
    text: bodyText
  }).then(result => {
    res.send(201);
  });
});

router.get("/about-us-submit", (req, res, next) => {
  models.AboutUs.findAll({
    limit: 1,
    order: [["createdAt", "DESC"]]
  }).then(result => {
    res.send(result[0].text);
  });
});

router.get("/reqSearch", (req, res, next) => {
  models.University.findAll({
    limit: 1,
    where: {
      name: req.query.uniName
    },
    include: {
      model: models.Faculty,
      where: {
        name: req.query.faculty
      }
    },
    order: [["createdAt", "DESC"]]
  }).then(university => {
    console.log(university);
    if (university) {
      res.send(university[0].dataValues.Faculties[0]);
    } else {
      res.send("");
    }
  });
});
router.get("/req", (req, res, next) => {
  models.University.findAll({
    include: {
      model: models.Faculty
    },

    order: [["createdAt", "DESC"]]
  }).then(university => {
    if (university) {
      res.send(university);
    } else {
      res.send([]);
    }
  });
});

router.get("/getAllUnis", (req, res, next) => {
  models.University.findAll({}).then(result => {
    res.send(result);
  });
});

router.get("/getFacultiesOfUni", (req, res, next) => {
  models.Faculty.findAll({
    include: {
      model: models.University,
      where: {
        name: req.query.uniSelected
      }
    }
  }).then(result => {
    res.send(result);
  });
});


router.get("/getUniInfo", (req, res, next) => {
    models.UniInfo.findOne({
        include: {
            model: models.University,
            where: {
                name: req.query.uniSelected
            }   
        },
        order: [["createdAt", "DESC"]]
    })
    .then (result => {
        res.send(result)
    })
})

module.exports = router;
