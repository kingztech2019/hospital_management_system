var mysql =require('mysql');
var express = require ('express');
var cookie = require ('cookie-parser');
var router = express.Router();
var app = express();
var io = require("socket.io");


router.get('/',function(req,res){
    res.render('chat.ejs');
});





module.exports = router;


