var mysql =require('mysql');
var express = require ('express');
var cookie = require ('cookie-parser');
var db = require.main.require ('./models/db_controller');

var router = express.Router();
router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/',function(req,res){
    db.getallmed(function(err,result){
        res.render('store.ejs',{list : result});
    })
    
});

router.get('/add_med',function(req,res){
    res.render('add_med.ejs');
});


router.post('/add_med',function(req,res){
 var name = req.body.name;
 var p_date = req.body.p_date;
 var expire = req.body.expire;
 var e_date = req.body.e_date;
 var price = req.body.price;
 var quantity = req.body.quantity;

 db.addMed(name,p_date,expire,e_date,price,quantity,function(err,result){
    res.redirect('/store');
 });

});

router.get('/edit_med/:id',function(req,res){
    var id = req.params.id;
    db.getMedbyId(id,function(err,result){
        
        res.render('edit_med.ejs' ,{list : result});
    });
});

router.post('/edit_med/:id',function(req,res){
    var id = req.params.id;
    db.editmed(id,req.body.name,req.body.p_date,req.body.expire,req.body.e_date,req.body.price,req.body.quantity,function(err,result){
        res.redirect('/store');
    });

});

router.get('/delete_med/:id',function(req,res){
    var id = req.params.id;
    db.getMedbyId(id,function(err,result){
        
        res.render('delete_med.ejs' ,{list : result});
    });
});


router.post('/delete_med/:id',function(req,res){
    var id = req.params.id;
    
    db.deletemed(id,function(err,result){
        res.redirect('/store');
    });

});


router.post('/search',function(req,res){
    var key = req.body.search;
    db.searchmed(key,function(err,result){
        console.log(result);
        
        res.render('store.ejs',{list : result});
    });
});

module.exports = router ;