var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ckblog');//；连接数据库
var db  =mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open', function() {
  console.log("db connect once");
});

var Schema = mongoose.Schema;   //  创建模型
var userScheMa = new Schema({
	name: String,
	password: String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联
var blogsScheMa = new Schema({
  type: String,
  name:String,
  content:String,
  title:String,
  date:Date,
  state:Boolean

});

exports.user = db.model('users', userScheMa); //  与users集合关联
exports.blog = db.model('blogs',blogsScheMa);
exports.db = db;