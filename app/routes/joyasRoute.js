const express = require('express')
const router = express.Router()

router.get('/joyas', (req,res)=>{
    res.json({
        mensaje:"hola mundo"
    })
})

router.get('/joyas/anillo', (req,res)=>{
    res.json({
        mensaje:"hola mundo"
    })
})

module.exports=router