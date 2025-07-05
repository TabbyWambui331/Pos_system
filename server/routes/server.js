import express from 'express';
import cors from 'cors';
const app = express();

import productRoutes from './routes/products.js';
import salesRoutes from './routes/sales.js';
import stockRoutes from './routes/stock.js';

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/sales', salesRoutes);
app.use('/api/stock', stockRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
