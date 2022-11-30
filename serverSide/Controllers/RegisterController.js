const Register=require ("../Models/Register");

const PostRegister=async(req,res)=>{
    console.log(req.body);
    try{
    const {surename,address,city,state,email,phone,companyName,description,solution,marketSize,productMarket,details}=req.body

        if(!(surename,address,city,state,email,phone,companyName,description,solution,marketSize,productMarket,details)){
            res.json("all input are required")
            // console.log("all input are required");
        }
               
            const register=await Register.create({
                surename:surename,
                address,city,state,email,phone,companyName,description,solution,marketSize,productMarket,details,
                status:'pending',
                state:false
            })
            res.json('succesfully inserted')       
        }catch(error){
            console.log(error);
        }
}

//get data
const getregister=async(req,res)=>{
    try{
       const register=await Register.find()
         res.json(register)
   }catch(error){
    console.log('not working');
   }
    
}


const getSingle=async(req,res)=>{
    try{
        const id=req.params.id
         const singleRegister=await Register.findById(id)
         res.json(singleRegister)
    }catch(error){
        console.log(error);
    }
}


/* --------------------------- //update the status -------------------------- */
const getupdate=async(req,res)=>{
  console.log(req.params.id);
    try{
        const id=req.params.id;
        const getUpdate=await Register.findByIdAndUpdate(id,{
                status:"process"  
        })

        res.json(getUpdate)
    }catch(error){
        console.log(error);
    }
}

//get process  datas


const processUpdate=async(req,res)=>{
    try{
        const processRegister=await Register.find({status:"process"})
        res.json(processRegister)
    }catch(error){
      throw error
    }
}


const getdelete=async(req,res)=>{
    // console.log(req.params.id);
    try{
        const id=req.params.id;
        const getdeclain=await Register.findOneAndDelete(id)

        res.json(getdeclain)
    }catch(error){
        console.log(error);
    }
}



/* ------------------------ //get update in approved ------------------------ */
const postUpdate=async(req,res)=>{
        console.log(req.params.id);
    try{
        const id=req.params.id
         const postupdate=await Register.findByIdAndUpdate(id,
            {
                status:"Aproved"
            })
            res.json(postupdate)
    }catch(error){
        throw(error)
    }
}

//get apprved update
const approvedUpdate=async(req,res)=>{
             try{
                 const approvedRegister=await Register.find({status:"Aproved"})
                 res.json(approvedRegister)
             }catch(error){
                console.log(error);
             }
}



module.exports={
    PostRegister,
    getregister,
    getSingle,
    getupdate,
    processUpdate,
    postUpdate,
    approvedUpdate,
    getdelete
}