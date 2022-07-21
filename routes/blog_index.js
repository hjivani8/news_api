var express = require('express');
var router = express.Router();

var blog = require('../model/blogschema');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/blog',async function(req, res, next) {

    try {

      const getblog =await blog.create(req.body);

      res.status(201).json({

        data:getblog

      })
      
    } catch (error) {

      res.send(error.message);
      
    }

});


router.delete('/blogdelete/:id',async function(req, res, next) {

  try {

    const getblog =await blog.findByIdAndDelete(req.params.id);

    res.status(201).json({

      data:getblog

    })
    
  } catch (error) {

    res.send(error.message);
    
  }

});


router.patch('/blogupdate/:id',async function(req, res, next) {

  try {

    const getblog =await blog.findByIdAndUpdate(req.params.id,req.body);

    res.status(201).json({

      data:getblog

    })
    
  } catch (error) {

    res.send(error.message);
    
  }

});

module.exports = router;
