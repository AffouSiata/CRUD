/*const connect = require("./connexion");


const userQuery= class{
    static inserer = (data) =>{
        let {nom,prenom,email,password,numero} = data;
      
        let requete = "INSERT INTO utilisateurs (nom, prenom, email, password, numero) VALUES(?,?,?,?,?)";

        connect.query(requete,[nom,prenom,email,password,numero],function(error,res){
            if(error){
                return{erreur:error}
            }
            else{
                console.log('connecté');
                // return{success:res}
        
        }
         })

    };

}

module.exports=userQuery;*/
