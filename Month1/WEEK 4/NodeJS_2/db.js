const mongoose = require('mongoose')

const mongoURL = 'mongodb://0.0.0.0:27017/hotels'

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to MongoDB')
})

db.on('error',(err)=>{
    console.log('Error to MongoDB',err)
})

db.on('disconnected',()=>{
    console.log('Disconnected to MongoDB')
})

module.exports = db;