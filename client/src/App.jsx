import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, Heading, Text, Divider } from '@chakra-ui/react';
import ProductList from './components/ProductList.jsx';
import Layout from './components/Layout';

const API_URL = 'http://localhost:5000/api/products';

function App() {
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(() => setProducts([]));

    fetch('http://localhost:5000/api/sales?last24h=true')
      .then(res => res.json())
      .then(data => setSales(data))
      .catch(() => setSales([]));
  }, []);

  const totalSales = sales.reduce((sum, sale) => sum + sale.amount, 0);

  return (
    <ChakraProvider>
      <Layout>
        <Box maxW="900px" mx="auto" mt={8} p={4}>
          <Heading as="h1" size="xl" mb={2} textAlign="center">
            Easymob <Text as="span" color="blue.400">– making biz eazy!</Text>
          </Heading>
          <Divider my={4} />
          <Box mb={6} p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
            <Text fontSize="lg" fontWeight="bold">Sales (last 24 hours):</Text>
            <Text fontSize="2xl" color="green.500" fontWeight="bold">
              Ksh {totalSales}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {sales.length} products sold
            </Text>
          </Box>
          <ProductList products={products} />
        </Box>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
