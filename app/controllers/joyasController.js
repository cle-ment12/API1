const joyasModel = require('../models/joyasModel')

function buscarTodo(re,res){
    joyasModel.find({})
    .then(joyas =>{
        if(joyas.length){
            return res.status(200).send({joyas})
        }
        return res.status(204).send({mensaje:"no hay nada que mostrar"})            
})
 .catch(e =>{ return res.status(404).send({mensaje:`error al consultar la informacion ${e} `})})
}

function agregarJoyas(req,res){
    console.log(req.body)
    new joyasModel(req.body).save()
    .then(info => { 
        return res.status(200).send({ 
                mensaje:"La informacion se guardo de forma correcta",
                info
        })
    }) 
    .catch(e =>{return res.status(404).send({mensaje:`error al guardar $(e)`})} )
}
    

module.exports ={
    buscarTodo,
    agregarJoyas
} 