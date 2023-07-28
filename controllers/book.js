
const { response } = require("express");

//Import tabel Book
const Book = require("../models/book");


module.exports = { //lakukan module export sebuah objek
    
    index: async (req, res) => {
        const book = await Book.find({});
        res.json(book);
    },
   
    tambah: async (req, res) => {
        const book = new Book(req.body);
        await book.save();
        res.json(book);
    },

update: async (req, res) => {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
    res.json(book);
},

delete: async (req, res) => {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    res.json({ message: "Data berhasil dihapus"});
},
 };