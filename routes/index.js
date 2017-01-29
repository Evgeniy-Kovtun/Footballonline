const express = require('express'),
    router = express.Router(),
    os = require('os'),
    fs = require('fs'),
    path = require('path'),
    multer = require('multer'),
    Players = require('../Models/Task').Players,
    Stadiums = require('../Models/Task').Stadiums,
    Coutchs = require('../Models/Task').Coutchs,
    pug = require('pug'),
    async = require('async'),
    mongoose = require('mongoose');
const upload = multer({dest: os.tmpdir()});
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index1.pug');
});
router.get('/players', function (req, res) {
    Players.find({}, function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
            res.render('players', {players: data});
        }
    });

});
router.post('/createPlayers', (req, res) => {
    "use strict";
    console.log("При создании получаем");
    console.log(req.body);
    Players.create({
        Name: req.body.Name,
        PDate: req.body.PDate,
        Country: req.body.Country,
        Club: req.body.Club,
        Role: req.body.Role
    }, (err, object) => {
        if (err) {
            console.error(err);
        } else {
            console.log("USPESHO");
            res.status(201).json(object)
        }

    })
});
router.post('/removePlayers', (req, res) => {
    "use strict";
    console.log(req.body);
    Players.findById(req.body.id, function (err, object) {

        if (err) {
            console.log(err);
        } else
            object.remove(function (err) {
                if (err) {
                    res.sendStatus(500);
                }
                else {
                    res.status(200).json({id: req.body.id});
                }
            })
    })
});
router.get('/stadiums', function (req, res) {
    Stadiums.find({}, function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
            res.render('stadiums', {stadiums: data});
        }
    });

});
router.post('/createStadiums', (req, res) => {
    "use strict";
    console.log("При создании получаем");
    console.log(req.body);
    Stadiums.create({
        SName: req.body.SName,
        SCountry: req.body.SCountry,
        SCity: req.body.SCity,
        SCapacity: req.body.SCapacity
    }, (err, object) => {
        if (err) {
            console.error(err);
        } else {
            console.log("USPESHO");
            res.status(201).json(object)
        }

    })
});
router.post('/removeStadiums', (req, res) => {
    "use strict";
    console.log(req.body);
    Stadiums.findById(req.body.id, function (err, object) {
        if (err) {
            console.log(err);
        } else
            object.remove(function (err) {
                if (err) {
                    res.sendStatus(500);
                }
                else {
                    res.status(200).json({id: req.body.id});
                }
            })
    })
});
//_____________
router.get('/coutchs', function (req, res) {
    Coutchs.find({}, function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
            res.render('coutchs', {coutchs: data});
        }
    });

});
router.post('/createCoutchs', (req, res) => {
    "use strict";
    console.log("При создании получаем");
    console.log(req.body);
    Coutchs.create({
        CName: req.body.CName,
        CCountry: req.body.CCountry,
        CAge: req.body.CAge,
        CZan: req.body.CZan
    }, (err, object) => {
        if (err) {
            console.error(err);
        } else {
            console.log("USPESHO");
            res.status(201).json(object)
        }

    })
});
router.post('/removeCoutchs', (req, res) => {
    "use strict";
    console.log(req.body);
    Coutchs.findById(req.body.id, function (err, object) {
        if (err) {
            console.log(err);
        } else
            object.remove(function (err) {
                if (err) {
                    res.sendStatus(500);
                }
                else {
                    res.status(200).json({id: req.body.id});
                }
            })
    })
});
module.exports = router;
