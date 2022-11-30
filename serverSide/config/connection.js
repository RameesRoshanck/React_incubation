const Mongoose=require('mongoose')
URL=process.env.URL
// const URL=mongodb://localhost:27017
// console.log(URL);


const connectDB=async()=>{
    try{
        await Mongoose.connect(URL)
        console.log('database connected');
    }catch(error){
        throw error
    }

}

module.exports=connectDB
