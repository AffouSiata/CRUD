const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const db = require('./connexion')
const index= require("./router/index") 


db.connect((error)=>{
    if(error){
        console.log("echec de connexion",error);
    }
    else{
        console.log("connexion reussi");
    }
})



app.set('views','./views');
app.set('view engine','ejs')
app.use('/public',express.static('public'));

 app.use(bodyparser.urlencoded({extended: false}));
app.use('/',index);








app.listen(3000,(req,res)=>console.log(`listening  on port 3000`));

