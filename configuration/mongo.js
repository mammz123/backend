const mongoose = require('mongoose')


const connection = async()=>{
    try{
        const connect = await mongoose.connect("mongodb+srv://muhammedrahim0676:mammad123@cluster0.3t9rgaq.mongodb.net/?retryWrites=true&w=majority")
        console.log("database is connected")
    }

    catch(err){
        console.log(`error :${err}`);
        process.exit()
    }
}

module.exports=connection