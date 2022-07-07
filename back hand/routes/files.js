const router =require('express').Router();
const path= require('path');
const File=require('../models/file')
const {v4: uuid4} = require('uuid')

// it is used to validate
const multer=require('multer');
// setting up multer
let storage=multer.diskStorage({
                //  call back has two argument error, destination
    destination: (req,file,cb) => cb(null,'uploads/'),
    filename: (req,file,cb) => {
        // for generating unique name for each file we are doing this
        const uniqueName=`${Date.now()}-${Math.round(Math.random() * 1E9 )}${path.extname(file.originalname)}`;
        cb(null,uniqueName);

    }
})

let upload = multer({
    storage:storage,
    limit: {fileSize: 1000000*100},  //size of file is 100mb
}).single('myfile')

router.post('/',(req,res)=>{
    
    // store file (after configuring multer)
    upload(req,res, async (err)=>{

        // validate request
        // checking if we are receiving file correctly or not
        if(!req.file)
        {
            return res.json({error : "all fields are required"})
        }

        if(err)
        {
            return res.status(500).send({error: err.message})
        }

       // store to database
        const file =new File({
            filename: req.file.filename,
            uuid: uuid4(),
            path:req.file.path,
            size: req.file.size

        })
        const response = await file.save();

        // response ->link
        return res.json({file : `${process.env.APP_BASE_URL}/files/${response.uuid}`});
        // http://localhost:3000/files/23464ljfoe-92837kjshfhs  ->this type of link is returned
    })

})


 
module.exports = router