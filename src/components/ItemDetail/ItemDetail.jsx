import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import { Box, Card, CardBody, CardFooter, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';


const ItemDetail = ({nombre, stock, img, precio, descripcion}) => {
    const onAdd = (quantity) => {
        toast(`Agregaste ${quantity} unidades`)
    }
  return (
    <Box justify={'center'} align={'center'}>
    <Card justify={'center'} align={'center'} w={'70%'} border='3px' borderColor='#243F4D' boxShadow='2xl'>
        <CardBody justify={'center'} align={'center'}>
            <Image
                src={img}
                alt={nombre}
                borderRadius='md'
                boxSize='100%'
                objectFit='cover' 
                w={'300px'}
                h='300px' 
            />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{nombre}</Heading>
          <Text color='blue.600' fontSize='2xl'>
            ${precio}
          </Text>
          <Text>
            {descripcion}
          </Text>
        </Stack>
        </CardBody>
        <CardFooter>
                <ItemCount stock={stock} valorInicial={1} onAdd={onAdd}/>
                <ToastContainer />
        </CardFooter>
        
    </Card>
    </Box>
  )
}

export default ItemDetail