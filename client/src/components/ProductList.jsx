import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const ProductList = ({ products }) => {
  const today = new Date();

  return (
    <Box mt={8} p={4} bg="white" boxShadow="md" borderRadius="md">
      <Text fontSize="xl" mb={4} fontWeight="bold">Product Inventory</Text>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ background: '#f5f5f5' }}>
            <tr>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Name</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Category</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Quantity</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Expiry</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Price (Ksh)</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              const isExpired = new Date(product.expiry) < today;
              return (
                <tr key={product.id} style={{ background: isExpired ? '#fed7d7' : 'transparent' }}>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{product.name}</td>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{product.category}</td>
                  <td style={{ padding: '8px', border: '1px solid #ddd', color: product.quantity < 10 ? 'red' : 'inherit', fontWeight: product.quantity < 10 ? 'bold' : 'normal' }}>
                    {product.quantity < 10 ? `${product.quantity} (Low)` : product.quantity}
                  </td>
                  <td style={{ padding: '8px', border: '1px solid #ddd', color: isExpired ? '#c53030' : 'inherit' }}>
                    {new Date(product.expiry).toLocaleDateString()}
                  </td>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{product.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Box>
  );
};

export default ProductList;