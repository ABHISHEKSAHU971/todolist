var express = require('express');
var router = express.Router();
const tasks = require('./users')

/* GET home page. */
router.get('/', function (req, res, next) {
  tasks.find()
    .then(function (Alltask) {
      res.render('index',{Alltask});
    })
});

router.post('/taskcreate', function (req, res) {
  tasks.create({
    task: req.body.task
  }).then(function (created) {
    console.log(created);
    res.redirect('/')
  })
  
})
router.get('/delete/:id', function (req, res) {
  tasks.findByIdAndDelete({ _id: req.params.id })
    .then(function (deleted) {
    res.redirect('/')
  })
    
  
  
})

module.exports = router;
