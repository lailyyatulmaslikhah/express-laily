const express=require('express') //import (require) module express lalu simpan di const express
const router = express.Router() //instance object express untuk menjalankan route secara modular
const mahasiswacontroller = require('../controllers/mahasiswa') //import data dari file book.js di folder controller 
 

router.route("/api/mahasiswa").get(mahasiswacontroller.index)
.post(mahasiswacontroller.tambah)


//UPDATE DATA
router.put("/api/mahasiswa/:id", mahasiswacontroller.update);

//DELETE DATA
router.delete("/api/mahasiswa/:id", mahasiswacontroller.delete);

module.exports = router; //Modul ini sudah di isi dengan route khusus untuk ( URL:/BOOK),
                        //dan sudah bisa kita exports

