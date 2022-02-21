const express = require('express');
// const app = express();
const router = new express.Router();
// const bodyparser = require('body-parser');
// let azerty = bodyparser.urlencoded({ extended: false});





router.get('/',function(req,res){
    res.render('../views/index')
    // let ddd = userQuery.inserer(req.body)
    // console.log(ddd);
})


// router.post('/',azerty ,(req,res)=>{
// let ddd=userQuery.inserer(req.body)
//     console.log(ddd);

// })
module.exports = router;