var express = require('express');

var router = express.Router();
var bodyParser = require('body-parser');
var db = require.main.require ('./models/db_controller');

router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());


module.exports =router;

router.get('/',function(req,res){

    res.render('setpassword.ejs');
});

router.post('/',function(req,res){

    var token = req.body.token;
    db.checktoken(token,function(err,result){
        
        if (result.length > 0 ){

            console.log(result);
            var newpassword = req.body.password;
            var id =result[0].id;
            db.setpassword(id,newpassword,function(err,result1){
                if(err){
                   // console.log('token did not match');
                    res.send('token did not match');
                }
                else{
                    res.send('Password has been changed...Go to login page');
                }
                
            });
           
        }
        else {
            res.send('Token didnt match!!!');
        }
           
        
    });
});