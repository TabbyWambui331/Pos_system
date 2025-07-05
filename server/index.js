const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes'); // adjust path if needed

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

