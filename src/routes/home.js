const express = require('express');
const router = express.Router();
let controller = require('../controllers/homeController')

router.get('/', controller.index)
//router.get('/frequent-questions', controller.preguntas_frecuentes)
//router.get('/locals', controller.locals)


/*
router.get('/', (req, res) =>{
    res.render('home', {
        title: "TimbóApp",
    });
})*/

module.exports = router;