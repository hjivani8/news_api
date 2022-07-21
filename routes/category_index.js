var express = require('express');
var router = express.Router();

var category = require('../model/categoryschema');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/category',async function(req, res, next) {

    try {

      const getcategory =await category.create(req.body);

      res.status(201).json({

        data:getcategory

      })
      
    } catch (error) {

      res.send(error.message);
      
    }

});


router.delete('/categorydelete/:id',async function(req, res, next) {

  try {

    const getcategory =await category.findByIdAndDelete(req.params.id);

    res.status(201).json({

      data:getcategory

    })
    
  } catch (error) {

    res.send(error.message);
    
  }

});


router.patch('/categoryupdate/:id',async function(req, res, next) {

  try {

    const getcategory =await category.findByIdAndUpdate(req.params.id,req.body);

    res.status(201).json({

      data:getcategory

    })
    
  } catch (error) {

    res.send(error.message);
    
  }

});

module.exports = router;