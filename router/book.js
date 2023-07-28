const express=require('express') //import (require) module express lalu simpan di const express
const router = express.Router() //instance object express untuk menjalankan route secara modular
const bookcontroller = require('../controllers/book') //import data dari file book.js di folder controller 


router.route("/api/book").get(bookcontroller.index).post(bookcontroller.tambah);

//UPDATE DATA
router.put("/api/book/:id", bookcontroller.update);

//DELETE DATA
router.delete("/api/book/:id", bookcontroller.delete);

module.exports = router; //Modul ini sudah di isi dengan route khusus untuk ( URL:/BOOK),
                        //dan sudah bisa kita exports

