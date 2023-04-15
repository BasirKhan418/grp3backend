const mongoose = require('mongoose');
// const uri ="mongodb://localhost:27017";
// mongodb+srv://basir:basir418@cluster0.ydjhxux.mongodb.net/test

// const server = '127.0.0.1:27017';
// const database = 'projectMs';
const connectToMongo=async()=>{
    await mongoose.connect(`mongodb+srv://basir:basir418@cluster0.ydjhxux.mongodb.net/peojectMs`)
    .then(()=>{
        console.log("connected to mongo successfully!!")
    }).catch((err)=>{
       console.log("Error Occurs ",err);
    })
}
module.exports=connectToMongo;