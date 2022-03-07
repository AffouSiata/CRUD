const express = require('express');
const  connect  = require('../connexion');
const { index } = require('../controller/controller.utilisateurs');
const controlle = require('../controller/controller.utilisateurs');
const router = new express.Router();



router.get('/',controlle.index);



router.post('/',(req,res)=>{
    // let ddd = userQuery.inserer(req.body)
        // console.log(ddd);
        res.redirect('/')
})

module.exports = router;








// router.get('/modifier', function(req,res){
//     let id = req.params.id
//     console.log(id); 
//     connect.query('UPDATE  utilisateurs SET status = ? WHERE id = ?',[id], function(error,resultat,fields){
//         if(error){
//             return('echec',error)
//         }
//         else{
//             res.render('../views/index',{resultat})
//             console.log(resultat);
//             res.redirect('/formulaire')
//         }
//     })
   
// })


