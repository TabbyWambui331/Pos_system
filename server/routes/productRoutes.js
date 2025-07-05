const express = require('express');
const db = require('../db.js');
const router = express.Router();

// Create a new product
router.post('/add', (req, res) => {
  const { name, category, quantity, expiry, price } = req.body;
  const sql = 'INSERT INTO products (name, category, quantity, expiry, price) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, category, quantity, expiry, price], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ success: true, id: result.insertId });
  });
});

// Get all products
router.get('/', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
});

// Update a product
router.put('/:id', (req, res) => {
  const { name, category, quantity, expiry, price } = req.body;
  const sql = 'UPDATE products SET name=?, category=?, quantity=?, expiry=?, price=? WHERE id=?';
  db.query(sql, [name, category, quantity, expiry, price, req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ success: true });
  });
});

// Delete a product
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM products WHERE id=?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ success: true });
  });
});

module.exports = router;