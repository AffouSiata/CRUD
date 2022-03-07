const { request,response } = require("express");
const connect = require("../connexion");

const controlle = class{

    static inserer = (req=request,res=response) =>{
        let {nom,prenom,email,password,numero} = data;
        console.log(data);
      
        let requete = "INSERT INTO utilisateurs (nom, prenom, email, password, numero) VALUES(?,?,?,?,?)";

        connect.query(requete,[nom,prenom,email,password,numero],function(error,res){

            if(error){
                console.log(error);
                return{error:error}
            }
            else{
                console.log('connecté');
                return{success:res}
        
            }
        })
    }
   
    static azert =(req=request,res=response)=>{
        
            connect.query('SELECT * FROM utilisateurs', function(error,resultat,fields){
               
                if(error){
                    console.log(error);
                     return('echec',error)
                    
                }
                else{
                    res.render('../views/formulaire',{resultat})
                    console.log(resultat);
                }
            })
           
        
    };
    static index =(req=request,res=response)=>{
        
        connect.query('SELECT * FROM utilisateurs', function(error,resultat,fields){
            if(error){
                return('echec',error)
            }
            else{
                res.render('../views/index',{resultat})
                 console.log(resultat);
            }
        })
    }; 
    
    
   
};

module.exports = controlle;



 // static supprimer=(req=request,res=response)=>{
    //     const id = req.params.id;
    //     conexion.query('DELETE FROM utilisateurs WHERE id = ?',[id], (error, results,next)=>{
    //         if(error){
    //             console.log(error);
    //         }else{   
    //             console.log("zertyui");        
    //             res.redirect('/');         
    //         }
    //     })
    // };

    // static modifie =(req=request,res=response)=>{    
    //         const id = req.params.id;
    //         conexion.query('SELECT * FROM utilisateurs WHERE id=?',[id] , (error, resultat) => {
    //             if (error) {
    //                 throw error;
    //             }else{            
                
    //                 res.render('../views/formulaire',{resultat:resultat[0]})           
    //             }        
    //         });
    // };
    // static modifie =(req=request,res=response)=>{
    //         const prenom = req.body.prenom;
    //         const password = req.body.password;
    //         const email = req.body.email;
    //         const numero = req.body.numero;
    //     conexion.query('UPDATE utilisateurs  SET ? WHERE id = ?',[{nom:nom, prenom:prenom,password:password, email:email,numero:numero}, id], (error, resultat)=>{
    //         if(error){
    //             console.log(error);
    //         }else{           
    //             res.redirect('/');         
    //         }
    // });
    // };