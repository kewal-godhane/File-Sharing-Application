const connectDB=require('./config/db')
const path = require('path');
const express=require('express')
const app = express()
const cors = require('cors')

// Cors 
const corsOptions = {
    origin: ['http://127.0.0.1:56037']
}
app.use(cors(corsOptions));  

// $env:port="8000" ; node server.js   // this is how you can set process.env
const port=process.env.port || 3000;


app.use(express.static('public'));
connectDB();

// templete engine

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');  

// routes
app.use('/api/files',require('./routes/files'))   //for downloading page
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

app.listen(port,()=>{
    console.log(`listning to ${port}`);
})