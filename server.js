const exp = require("express")
const cors = require('cors')
const app = exp();
const bodyParser = require("body-parser")

app.use(cors())
app.use(exp.json())
app.use(bodyParser.json())
app.listen(3500,()=>console.log("server listening to port 3500......."))



const mclient = require('mongodb').MongoClient;

//connect to DB server using MongoClient 
mclient.connect('mongodb://127.0.0.1:27017')
.then((dbref)=>{
    const cookbitesDBObj = dbref.db('cookbites')
    const recipiesCollectionObj = cookbitesDBObj.collection('recipies')
    const usersCollectionObj = cookbitesDBObj.collection('users')

    app.set("usersCollectionObj",usersCollectionObj)
    app.set("recipiesCollectionObj",recipiesCollectionObj)
    console.log("Database Successfully connected")
})
.catch(err=>console.log("error in connecting to DB: ",err))

//import UsersApp
const UsersApp = require("./Apis/UsersApi")

//import RecipiesApp
const RecipiesApp = require("./Apis/RecipiesApi")

app.use('/users-api',UsersApp)
app.use('/recipies-api',RecipiesApp)
