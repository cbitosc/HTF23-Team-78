const exp = require('express')
const UsersApp = exp.Router();
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const expressAsyncHandler = require("express-async-handler")

UsersApp.use(exp.json())


//POST request
UsersApp.post('/user-signup',expressAsyncHandler(async(request,response)=>{
    //get userCollectionObj
    const userCollectionObj = request.app.get("usersCollectionObj")
    //get newUser from request
    const newUser = request.body;
    //check for duplicate user by username
    let userOfDB = await userCollectionObj.findOne({email:newUser.email})
    //if user already existed, send res to client "User already existed"
    if(userOfDB!=null){
        response.status(200).send({message:"User already existed"})
    }
    //if user not existed
    else{
        //hash the password
        let hashedPassword = await bcryptjs.hash(newUser.password,5)
        //replace plane password with hashed password
        newUser.password = hashedPassword;
        //insert user
        await userCollectionObj.insertOne(newUser)
        //send res
        response.status(201).send({message:"User Created"})
    }

}))

UsersApp.post('/user-login',expressAsyncHandler(async(request,response)=>{
    //get userCollectionObj
    const userCollectionObj = request.app.get("usersCollectionObj")
    //get user Credentials from req
    const userCredObj = request.body
    console.log(userCredObj)
    //verify username
    let userOfDB = await userCollectionObj.findOne({email:userCredObj.email})
    //if username is invalid
    if(userOfDB===null){
        response.status(200).send({message:"Invalid username"})
    }
    //if username is valid
    else{
        //verify password
        console.log(userOfDB.password)
        let isEqual = await bcryptjs.compare(userCredObj.password,userOfDB.password)
        //if passwords are not matched
        if(isEqual===false){
            response.status(200).send({message:"Invalid Password"})
        }
        //if passwords matched
        else{
            //create a jwt token
            let jwtToken = jwt.sign({email:userOfDB.email},'abcdef',{expiresIn:"2d"})
            //send token in response
            response.status(200).send({message:"success",token:jwtToken,user:userOfDB})
        }
    }
}))

module.exports = UsersApp