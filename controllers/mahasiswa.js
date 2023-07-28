
const { response } = require("express");
//Import tabel Mahasiswa
const Mahasiswa = require("../models/mahasiswa");


module.exports = { 
    index: async (req, res) => {
        const mahasiswa = await Mahasiswa.find({});
        res.json(mahasiswa);
    },
    
    tambah: async (req, res) => {
        const mahasiswa = new Mahasiswa(req.body);
        await mahasiswa.save();
        res.json(mahasiswa);
    },

    update: async (req, res) => {
        const { id } = req.params;
        const mahasiswa = await Mahasiswa.findByIdAndUpdate(id, req.body, { new: true });
        res.json(mahasiswa);
    },
    

delete: async (req, res) => {
    const { id } = req.params;
    await Mahasiswa.findByIdAndDelete(id);
    res.json({ message: "Data berhasil dihapus"});
},
 };


