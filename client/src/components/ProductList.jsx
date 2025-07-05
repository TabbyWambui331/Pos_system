import React from 'react';
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
} from '@chakra-ui/react';

const ProductList = ({ products }) => {
  const bg = useColorModeValue('gray.50', 'gray.700');
  const today = new Date();

  return (
    <Box mt={8} p={4} bg="white" boxShadow="md" borderRadius="md">
      <Text fontSize="xl" mb={4} fontWeight="bold">Product Inventory</Text>
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
          {products.map((product) => {
            const isExpired = new Date(product.expiry) < today;

            return (
              <Tr key={product.id} bg={isExpired ? 'red.100' : 'transparent'}>
                <Td>{product.name}</Td>
                <Td>{product.category}</Td>
                <Td>
                  {product.quantity < 10 ? (
                    <Badge colorScheme="red">{product.quantity} (Low)</Badge>
                  ) : (
                    product.quantity
                  )}
                </Td>
                <Td color={isExpired ? 'red.600' : 'inherit'}>
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