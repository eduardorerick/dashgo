import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Siderbar } from '../../components/Sidebar';


export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Siderbar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontheight="normal">Usuários</Heading>
            <Button 
              as="a" 
              size="sm" 
              fontSize="md" 
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} />}
            >
              Criar novo usuário
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" w="8">
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Eduardo Rerick</Text>
                    <Text fontsize="sm" color="gray.300">eduardorerick@gmail.com</Text>
                  </Box>
                </Td>
                <Td>9 de setembro, 2021</Td>
                <Td>
                  <Button 
                    as="a" 
                    size="sm" 
                    fontSize="sm" 
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Eduardo Rerick</Text>
                    <Text fontsize="sm" color="gray.300">eduardorerick@gmail.com</Text>
                  </Box>
                </Td>
                <Td>9 de setembro, 2021</Td>
                <Td>
                  <Button 
                    as="a" 
                    size="sm" 
                    fontSize="sm" 
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Eduardo Rerick</Text>
                    <Text fontsize="sm" color="gray.300">eduardorerick@gmail.com</Text>
                  </Box>
                </Td>
                <Td>9 de setembro, 2021</Td>
                <Td>
                  <Button 
                    as="a" 
                    size="sm" 
                    fontSize="sm" 
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}