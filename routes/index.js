var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');
//var user = require('../models/user').user;
//mongoose.connect('mongodb://localhost/ckblog');
/* GET home page. */

var db = require('../database/db.js');
var moment = require('moment');
router.get('/', function(req, res) {
  res.render('index', { title: 'get' });//**render的作用是调用模板引擎
});

router.post('/index', function(req, res) {
    var query = {name: req.body.log, password: req.body.pwd};
        db.user.count(query, function(err, doc){
            if (doc==1) {
                var findResult = db.user.find(function(error, result){
                    if (error) {
                        res.send(error);
                    }else{
                        res.render('login', {
                            title : doc,
                            status: result,
                            username : result,
                            adminlist : result,
                            date : new Date()
                        });

                    }
                });
            }else{
                res.render('homepage', {
                    title : 'homepage',
                    status: doc,
                });
                //res.redirect('/');
            }
        });




});

router.get('/u/:user',function(req, res) {

});
router.post('/post',function(req, res) {

});
router.get('/reg',function(req, res) {
  res.render('reg', { title: 'reg' });//**render的作用是调用模板引擎
});
router.post('/reg',function(req, res) {
res.render('index0', { title: 'homepage' });//**render的作用是调用模板引擎
});
router.get('/login',function(req, res) {
  res.render('login', { title: 'login' });//**render的作用是调用模板引擎
});
router.post('/login',function(req, res) {
  res.render('homeview', { title: 'homepage' });//**render的作用是调用模板引擎
//  var query = {user: req.body.user, password: req.body.password};


});
router.get('/test',function(req, res) {
//res.render('test',{title:'test'});\
var query = {name:'cowkeys'};
 db.blog.find(query,function(error, result){
    if (error) {
        res.send(error);
    }else{
    //  res.render(result);//**render的作用是调用模板引擎
        res.render('test', { menulist: result,moment:moment});//**render的作用是调用模板引擎
    //  var a = moment("2016-01-27").("YYYY-MM-DD")
      //  res.send(a);
    }
});
});

router.get('/test/:id',function(req, res) {
//res.render('test',{title:'test'});\
//res.send(req.params.id);
var query = {_id:req.params.id};
 db.blog.find(query,function(error, result){
    if (error) {
        res.send(error);
    }else{
    //  res.render(result);//**render的作用是调用模板引擎
      //  res.jsonp(result);//**render的作用是调用模板引擎
    //  var a = moment("2016-01-27").("YYYY-MM-DD");
    console.log(result);
        res.send(result);
    }
});
});


module.exports = router;
