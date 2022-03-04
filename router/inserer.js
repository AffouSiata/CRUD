
const express = require('express');
const app = express();
const router = new express.Router();
const connect  = require('../connexion');
const { body, validationResult } = require('express-validator');
const controlle = require('../controller/controller.utilisateurs');
const { azert } = require('../controller/controller.utilisateurs');



router.get('/',controlle.inserer);


router.post('/',(req,res)=>{
    res.redirect('/')

})


module.exports=router;