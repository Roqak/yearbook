const Router = require('express').Router();
const Alumni = require('../Model/Alumni')



Router.get('/',(req,res)=>{
    res.render('home')
})


Router.post('/addAlumni',(req,res)=>{
    const newAlumni = new Alumni({
        Firstname: req.body.firstname,
        Lastname: req.body.lastname,
        Location: req.body.location,
        Phone: req.body.phone,
        Description: req.body.description,
        mail: req.body.email
    })

    newAlumni.save()
    .then(result=>{
        res.json(result)
    })
    .catch(err=>{
        res.json(err)
    })
})
Router.get('/addAlumni',(req,res)=>{
    res.render('addAlumni')
})
Router.get('/image',(req,res)=>{
    res.send('Uploaded')
})

module.exports = Router;