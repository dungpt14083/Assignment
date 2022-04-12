var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Album.find({},function (err,data) {
    // response.render('index',{data1:data})
    res.render('index', { title: 'Express',data1:data });
  })



});
// router.get('/delete/:id',(req,res)=>{
//  Album.deleteOne(req.params.id,function (error) {
//    res.render('index',{})
//  })
// })
router.post('/index',function (reg,res){
  Album.deleteOne({_id:''},function (error){

  })
})

router.get('/addalbum', function(req, res, next) {
  res.render('addalbum', { title: 'Thêm Hình Ảnh' });
});
var db ='mongodb+srv://admin:dungptph14083@cluster0.eyag6.mongodb.net/DungPham?retryWrites=true&w=majority'
const mongoose = require('mongoose');
mongoose.connect(db).catch(error => {
  console.log("co loi xay ra" + error)
});
var Albumsch = new mongoose.Schema({
  title:'string',
  nd:'string',
  linkpt:'string'

})
// var Album = new mongoose('album',Albumsch);
var Album =  mongoose.model('album',Albumsch);
router.post('/addalbum',function (request,response) {
  var title = request.body.title;
  var nd = request.body.nd;
  var linkpt = request.body.linkpt;
  console.log(title+nd+linkpt);
  const data = new Album({
    title:title,
    nd:nd,
    linkpt:linkpt
  });
  data.save(function (error)
  {
    var mes;
    if(error==null)
    {
      mes:'Thêm Thành Công'
      console.log('them thanh cong')
    }else mes = error
    response.render('addalbum',{message:mes})
  })

  Album.deleteOne({_id:''},function (error){

  })


})
module.exports = router;
