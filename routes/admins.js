var express = require('express');
var router = express.Router();
var db = require('../database/db.js');
var moment = require('moment');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/article',function(req, res) {
  //res.send('respond with a resource111');
  res.render('admin/article', { title: 'reg' });//**render的作用是调用模板引擎
});

router.post('/article',function(req, res) {
  //res.send('respond with a resource111');
  var title = req.body.n_title;
  var tag = req.body.n_tag;
  var content = req.body.n_ha;
  var time = moment().format("YYYY-MM-DD hh:mm:ss");
  var doc = {type:"article",name:"Cowkeys",  content : content,title : title,date :time,state:1,tag : tag};

  var blogEntity = new db.blog(doc);

  blogEntity.save(function(error) {
      if(error) {
          console.log(error);
      } else {
          console.log('saved OK!');
          res.redirect('../test');
      }
      // 关闭数据库链接
      //db.close();
  });
//
});
module.exports = router;
