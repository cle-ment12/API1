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

module.exports ={
    buscarTodo
} 