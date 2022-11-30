const Details=require("../Models/Register")
const Slot=require("../Models/Slot")


const createSlot=async(req,res)=>{
        const{slotName}=req.body
    try{
        const slot=await Slot.create({
               slotName:slotName,
               state:false
        })
        console.log("success fully created");

    }catch(error){
        throw error
        console.log("an error");
    }
}


const readSlot=async(req,res)=>{
    try{
        
        const readslot=await Slot.find()
        res.json(readslot)

    }catch(err){
        throw err
    }
}






const postSlot=async(req,res)=>{
        console.log(req.body);
    try{
           const {valueState,storeState}=req.body
            const register= await Details.findByIdAndUpdate(storeState,{state:true})
            const slot= await  Slot.findByIdAndUpdate(valueState,{state:true})
                res.send({status:"successfully updated",register,slot})
    }catch(error){
        console.log(error)
    }
}

const updatetSlot=async(req,res)=>{
    // console.log(req.body);
try{
        const id=req.params.id
        // console.log(id);
        const slot= await Details.findByIdAndUpdate(id,
            {
                state:false
            }
            )
            res.send({status:"successfully updated"})
}catch(error){
    console.log(error)
}
}


module.exports={
    createSlot,
    readSlot,
    postSlot,
    updatetSlot
}