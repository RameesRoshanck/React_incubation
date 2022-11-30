const mongoos= require('mongoose')

const SolotSchema=new mongoos.Schema({
    id:{
        type:Number,
        primaryKey: true,
        autoIncrement: true
    },
    slotName:{
        type:String
    },
    state:{
        type:String
    }
})

module.exports=mongoos.model("slot",SolotSchema)