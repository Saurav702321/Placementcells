const mongoose = require('mongoose');

// mongoose.connect(`mongodb+srv://${process.env.username}:${process.env.password}@cluster0.zygzz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

const Url = process.env.MONGOURL;

mongoose.connect(Url)
.then(()=>console.log('Mongodb is Up and Connected'))
.catch((err)=>console.log('Error While Connect To MongoDb',err));