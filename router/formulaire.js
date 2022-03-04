
const express = require('express');
const app = express();
const router = new express.Router();
const connect  = require('../connexion');
const { body, validationResult } = require('express-validator');
const controlle = require('../controller/controller.utilisateurs');
const { azert } = require('../controller/controller.utilisateurs');








router.get('/',controlle.azert);


router.post('/',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
    res.json(req.body)



})


module.exports=router;