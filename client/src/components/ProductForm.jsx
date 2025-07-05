import React, { useState } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Badge,
  useColorModeValue,
  Button,
  HStack,
} from '@chakra-ui/react';
import { saveAs } from 'file-saver';

const ProductList = ({ products }) => {
  const bg = useColorModeValue('gray.50', 'gray.700');
  const today = new Date();
  const [filter, setFilter] = useState('all');

  const isNearExpiry = (expiry) => {
    const expiryDate = new Date(expiry);
    const diffTime = expiryDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 && diffDays <= 7;
  };

  const filteredProducts = products.filter((product) => {
    if (filter === 'expired') return new Date(product.expiry) < today;
    if (filter === 'near') return isNearExpiry(product.expiry);
    return true;
  });

  const handleExport = () => {
    const csvContent = `data:text/csv;charset=utf-8,${["Name,Category,Quantity,Expiry,Price", ...filteredProducts.map(p => `${p.name},${p.category},${p.quantity},${p.expiry},${p.price}`)].join("\n")}`;
    const encodedUri = encodeURI(csvContent);
    saveAs(encodedUri, "product-list.csv");
  };

  return (
    <Box mt={8} p={4} bg="white" boxShadow="md" borderRadius="md">
      <Text fontSize="xl" mb={4} fontWeight="bold">Product Inventory</Text>
      <HStack mb={4} spacing={4}>
        <Button onClick={() => setFilter('all')}>All</Button>
        <Button onClick={() => setFilter('expired')} colorScheme="red">Expired</Button>
        <Button onClick={() => setFilter('near')} colorScheme="orange">Near Expiry</Button>
        <Button onClick={handleExport} colorScheme="green">Export CSV</Button>
      </HStack>
      <Table variant="simple">
        <Thead bg={bg}>
          <Tr>
            <Th>Name</Th>
            <Th>Category</Th>
            <Th>Quantity</Th>
            <Th>Expiry</Th>
            <Th>Price (Ksh)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredProducts.map((product) => {
            const isExpired = new Date(product.expiry) < today;
            const nearExpiry = isNearExpiry(product.expiry);

            return (
              <Tr key={product.id} bg={isExpired ? 'red.100' : nearExpiry ? 'orange.100' : 'transparent'}>
                <Td>{product.name}</Td>
                <Td>{product.category}</Td>
                <Td>
                  {product.quantity < 10 ? (
                    <Badge colorScheme="red">{product.quantity} (Low)</Badge>
                  ) : (
                    product.quantity
                  )}
                </Td>
                <Td color={isExpired ? 'red.600' : nearExpiry ? 'orange.500' : 'inherit'}>
                  {new Date(product.expiry).toLocaleDateString()}
                </Td>
                <Td>{product.price}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ProductList;
// This component displays a list of products with filtering options for expired and near-expiry products.
  