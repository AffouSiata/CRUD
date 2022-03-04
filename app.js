const express = require('express');
const app = express();
const index  = require('./router/index');
const routerforme = require("./router/formulaire");
const db = require('./connexion');
const { check } = require('express-validator');
const routerinser = require('./router/inserer')






app.set('views','./views');
app.set('view engine','ejs')


app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use('/public',express.static('public'));




db.connect((error)=>{
    if(error){
        console.log("echec de connexion",error);
    }
    else{
        console.log("connexion reussi");
        app.use('/', index);
        app.use('/formulaire', routerforme);
        app.use('/inserer', routerinser);

    }
});

// app.get('', urlencodedParser [
//     check('nom', 'cet utilisateur doit me comporter au moins 5 caractères')
//     .isLength({min : 5})

// ],(req,res)=>{
//     const error = validationResult(req)
//     if(error.isEmpty()){
//         return res.status(422).json(error.array())  
//     }
// }) 

// app.post(
//     '/user',
//     check('email').custom(value => {
//       return User.findByEmail(value).then(user => {
//         if (user) {
//           return Promise.reject('E-mail already in use');
//         }
//       });
//     }),                         
//     check('password').custom((value, { req }) => {
//       if (value !== req.body.passwordConfirmation) {
//         throw new Error('Password confirmation is incorrect');
//       }
//     }),
//      (req, res) => {
//       // Handle the request somehow
//      },
//   );





app.listen(5000,()=>console.log(`listening  on port 5000`));

