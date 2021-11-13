// var express = require('express');
// var router = express.Router();
// var bodyParser = require('body-parser');
// var db = require ('./db_controller');
// var fileUpload = require('express-fileupload')


// router.use(bodyParser.urlencoded({extended : true}));
// router.use(bodyParser.json());

// router.get('/',function(req,res){

//     res.render('add_doctor.ejs');
// });



// router.post('/',function(req,res){

//     // if(!req.files){
//     //     console.log('no file uploaded');
//     // }
//     // var file = req.body.image;
//     // var image =file.name;
//     // file.mv('/public/assets/images/upload_images'+file.name,function(err){

//     //     if(err)
//     //     return res.status(500).send(err);

//         db.add_doctor(req.body.first_name,req.body.last_name,req.body.email,req.body.dob,req.body.gender,req.body.address,req.body.phone,req.body.image,req.body.department,req.body.biography);
//     if(db.add_doctor){
//         console.log('1 doctor inserted');
//     }
//     res.redirect('add_doctor');
//     });

    



// module.exports = router;