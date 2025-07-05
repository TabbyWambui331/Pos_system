import express from 'express';
import db from '../db.js';
const router = express.Router();

// Record a stock movement
router.post('/add', (req, res) => {
  const { product_id, quantity, movement_type, note } = req.body;

  const sql = 'INSERT INTO stock_movements (product_id, movement_type, quantity, note) VALUES (?, ?, ?, ?)';
  const updateStock = movement_type === 'IN'
    ? 'UPDATE products SET quantity = quantity + ? WHERE id = ?'
    : 'UPDATE products SET quantity = quantity - ? WHERE id = ?';

  db.query(sql, [product_id, movement_type, quantity, note], (err) => {
    if (err) return res.status(500).send(err);

    db.query(updateStock, [quantity, product_id], (err) => {
      if (err) return res.status(500).send(err);
      res.send({ success: true, message: 'Stock movement recorded' });
    });
  });
});

// Get stock movement history
router.get('/', (req, res) => {
  const query = `
    SELECT stock_movements.*, products.name AS product_name
    FROM stock_movements
    JOIN products ON stock_movements.product_id = products.id
    ORDER BY movement_date DESC
  `;
  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
});

export default router;
