const express = require ('express')
const bookRouter = require('./router/book'); //import file book
const userRouter = require('./router/user');
const mahasiswaRouter = require('./router/mahasiswa'); //import file book
const mahasiswiRouter = require('./router/mahasiswi'); //import file book
const multer  = require('multer');
const path = require("path");
// const bodyParser = require('body-parser');
//import library CORS
const cors = require('cors');
const app = express()
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "image");
    },
    filename: (req, file, cb) => {
      cb(null, new Date().getTime() + "-" + file.originalname);
    },
  });
  
  const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

const mongoose = require("mongoose");








app.use(express.json()); //For parsing application json
app.use(express.urlencoded({ extended: true })) //for parsing application/x-www-form-urlenconded
app.use("/image", express.static("image"));
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);

app.use(express.json())
app.use(cors());
app.use(userRouter);
app.use(bookRouter); //tambahkan app.use nama cons
app.use(mahasiswaRouter); //tambahkan app.use nama cons
app.use(mahasiswiRouter); //tambahkan app.use nama cons
//materi bcyrpt user router untuk token register
app.use(express.static(path.join(__dirname, "public")));
// app.use(validateIndex)

//app.use(bodyParser.urlencoded({ extended: true })) //for parsing application/x-www-form-urlenconded
//app.use(bodyParser.json()); //For parsing application json

//use cors Gunakan middleware CORS sebelum menangani rute atau endpoint lainnya.

mongoose
.connect("mongodb://127.0.0.1:27017/uas_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})

.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("MongoDB connection error:", error);
});



app.get('/', function(request, respon){
    respon.send('Helo UAS!')
})

app.listen(5000, function(){
    console.log('server berjalan lancar')
})