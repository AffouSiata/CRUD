const express = require('express');
const  connect  = require('./connexion');
const { modifie } = require('./controller/controller.utilisateurs');
const controlle = require('./controller/controller.utilisateurs');
const router = new express.Router();



router.get('/',controlle.modifie);



// router.post('/',(req,res)=>{
//         res.redirect('/')
// })
router.post('/',(req=request,res=response)=>{    
             const id = req.params.id;
             conexion.query('SELECT * FROM utilisateurs WHERE id=?',[id] , (error, resultat) => {
                 if (error) {
                     throw error;
                 }else{            
                
                     res.render('../views/formulaire',{resultat:resultat[0]})           
                 }        
             });
     });

module.exports = router;