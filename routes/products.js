const router = require("express").Router();
const connection = require("../database/configDB");

router.get('/', (req, res) => {
    const sql = "SELECT * FROM products";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

router.post('/ajouter', (req, res) => {
    const { id } = req.body;
    const sql = "SELECT * FROM products WHERE id = ?"; 
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(400).json({message: " Produit manquant."});
        }

        res.status(201).json({message: "Article ajouté au panier", id});
    });
});

module.exports = router;