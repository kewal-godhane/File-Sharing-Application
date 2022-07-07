// const mongoose=require('mongoose')
// require('dotenv').config();

// function connectDB()
// {
//     // database connection
//     mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true, useFindAndModify:true});
//     const connection=mongoose.connection;

//     connection.once('open',()=>{
//         console.log('database connected.');
//     }).catch( err=>{
//         console.log('connection failed.');
//     })
// }

// module.exports=connectDB;



// mr5B7LZ22r2d1y4Z    ->password

// const mongoose = require('mongoose');
// const url="mongodb+srv://shareApp:mr5B7LZ22r2d1y4Z@cluster0.cmuio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// const connectDB = async () => {
//     mongoose
//         .connect(url, {
//             useCreateIndex: true,
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useFindAndModify: true
//         })
//         .then(() => console.log('Connected Successfully'))
//         .catch((err) => console.error('Not Connected'));
// }

// module.exports = connectDB;


const mongoose = require('mongoose')
require('dotenv').config();
const url = process.env.MONGO_CONNECTION_URL;

// const connectionParams={
//     useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true, useFindAndModify:true
// }
function connectDB(){
    mongoose.connect(url)
        .then( () => {
            console.log('Connected to the database ')
        })
        .catch( (err) => {
            console.error(`Error connecting to the database. n${err}`);
        })
}
module.exports = connectDB;
