const User=require('../Models/user')
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
// const user = require('../Models/user');
const SCRED_KEY=process.env.SCRED_KEY



const app=(req,res)=>{
    res.send('hai')
    res.end()
}

const signup=async(req,res)=>{
    console.log(req.body);
    try{

        const{username,email,phone,password}=req.body

        if(!(username && email && phone && password)){
            res.status(400).json('all input are required')
        }
        else{
            const emailExixt= await User.findOne({email})

            if(emailExixt){
                res.status(400).json('This email id allready exist')
                console.log('This email id allready exist');
            }
            else{
               

                const encryptpassword=await bcrypt.hash(password,10)
                const user=await User.create({
                    username,
                    email,
                    phone,
                    password:encryptpassword
                })
                res.send("successfully registerd")
                console.log("successfully registerd");
            }
        }
    }catch(error){
        throw error
    }
}

const login=async(req,res)=>{
    console.log(req.body);
    try{
           const {email,password}=req.body

           if(!(email && password)){
            res.status(400).json("all input are required")
           }else{
            const user= await User.findOne({email})
            if(user){
                const isMatch=await bcrypt.compare(password,user.password)

                const token=jwt.sign({id:user._id},SCRED_KEY,{expiresIn:"30m"});

                // res.cookie(String(user._id),token,{
                //     path:'/',
                //     expires:new Date(Date.now() + 1000 * 30),
                //     httpOnly:true,
                //     sameSite:'lax'
                // })


                res.json({message:"successfully login",token})
                console.log("successfully login");
            }else{
                res.status(400).json('User not exist')
                console.log('User not exist');
            }
           }
    }catch(error){
        throw error
        console.log('dgadgdsfgdsfgdsfg');
    }

}

const verifyToken=(req,res,next)=>{

    // const cookies=req.headers.cookie
    // // console.log(cookies);
    // const token=cookies.split("=")[1];
    // console.log(token);
    // if(!token){
    //  return req.status(404).json({message:"no token found"})
    // }
    // jwt.verify(String(token),SCRED_KEY,(err,user)=>{
    //     if(err){
    //         return res.status(400).json({message:"invalid Token"})
    //     }
    //     // console.log(user.id);
    //     req.id =user.id
    // })
    // next()
}


const getUser=async(req,res,next)=>{
       
    // const userId=req.id
    // let user;
    // try{
    //     user=await User.findById(userId)
    //       if(!user){
    //         return res.status(400).json({message:"user not found"})
    //       }else{
    //         res.status(200).json({user})
    //       }
    // }catch(error){
    //     throw error
    // }
}


const refreshTocken=(req,res,next)=>{
    // const cookies=req.headers.cookie
    // const prevToken=cookies.split("=")[1];
    // if(!prevToken){
    //     return req.status(404).json({message:"Couldn't find token"})
    // }
     
    // jwt.verify(String(prevToken),SCRED_KEY,(err,user)=>{
    //     if(err){
    //         console.log(err);
    //      return res.status(403).json({message:"Authentication failed"})
    //     }
    //     res.clearCookie(`${user.id}`);
    //     req.cookies[`${user.id}`]='';

    //     const token=jwt.sign({id:user.id},SCRED_KEY,{expiresIn:"30m"});

    //     res.cookie(String(user.id),token,{
    //         path:'/',
    //         expires:new Date(Date.now() + 1000 * 30),
    //         httpOnly:true,
    //         sameSite:'lax'
    //     })
    //     req.id=user.id
    //     next()
    // })
}



module.exports={
    app,
    signup,
    login,
    verifyToken,
    getUser,
    refreshTocken
}