const express = require('express');
const model = require('../model/mongo');
const router = express.Router();

// get method
router.get('/',async(req,res)=>{
    let data = await model.find({}); //findi the quotes
    res.render('home' , {title:"Home",data});
})

router.get('/newquotes',(req,res)=>{
 res.render('newquotes' ,{title:'newquotes'});
})


    // console.log(id)
router.get('/show/:id',async(req,res)=>{
    let {id} = req.params;
    let data = await model.findById(id);
    res.render('show',{data})
})

// post method

// new qoutes
router.post('/newquotes',async(req,res)=>{
     
    let data = new model({
        author:req.body.author,
        quote:req.body.quote
    })
    data.save().then(()=>{

        res.redirect('/')
    }).catch((err)=>{
        console.log(err)
    })
    
    
})
 // for delete
 router.delete('/delete/:id' , async(req,res)=>{
    let {id} = req.params;
    await model.findByIdAndDelete(id);
    res.redirect('/')
 })

 

module.exports = router;