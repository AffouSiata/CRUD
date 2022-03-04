const { request,response } = require("express");
const connect = require("../connexion");

const controlle = class{
    static azert =(req=request,res=response)=>{
        
            connect.query('SELECT * FROM utilisateurs', function(error,resultat,fields){
               
                if(error){
                    console.log(error);
                     return('echec',error)
                    
                }
                else{
                    res.render('../views/formulaire',{resultat})
                    
                    // console.log(resultat);
                }
            })
           
        
    }
    static index =(req=request,res=response)=>{
        
        connect.query('SELECT * FROM utilisateurs', function(error,resultat,fields){
            if(error){
                return('echec',error)
            }
            else{
                res.render('../views/index',{resultat})
                
                // console.log(resultat);
            }
        })
    }    

    static inserer = (data) =>{
            let {nom,prenom,email,password,numero} = data;
            console.log(data);
          
            let requete = "INSERT INTO utilisateurs (nom, prenom, email, password, numero) VALUES(?,?,?,?,?)";
    
            connect.query(requete,[nom,prenom,email,password,numero],function(error,res){
                if(error){
                    console.log(error);
                    return{erreur:error}
                }
                else{
                    console.log('connecté');
                    // return{success:res}
            
            }
             })
    
    };
       
    

   
}
module.exports = controlle;



 // static azert = function(req,res){
    //     let id = req.params.id
    //     connect.query('delete FROM utilisateurs WHERE id = ?',id, function(error,resultat){
    //         if(error){
    //             console.log(error);
    //             return('echec',error)
    //         }
    //         else{
    //             // res.render('../views/index')
    //             //  console.log("ok",resultat);
    //              res.redirect('/')
    //         }
    //     })

    // }