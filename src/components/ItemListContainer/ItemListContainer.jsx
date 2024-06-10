import { Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProducts, getProductsByCategory } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { BounceLoader } from 'react-spinners'

const ItemListContainer = ({title}) => {
  const [ products, setProducts ] = useState([])

  const [loading, setLoading] = useState(true)

  const {categoryId} = useParams()


  useEffect(() => {
    setLoading(true)
    getProducts()
    const dataProductos = categoryId ? getProductsByCategory(categoryId) : getProducts()
    dataProductos
    .then((data)=> setProducts(data))
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  },[categoryId])

  console.log(products)
  return (
    <Flex direction={'column'} justify={'center'} align={'center'}> 
      <Heading color={'#191D32'} mt={10}>{title}</Heading>
      {
        loading ?
        <Flex justify={'center'} align={'center'} h={'50vh'}>
          <BounceLoader color="#36d7b7" />
        </Flex>
        :
        <ItemList products={products} />
      }
    </Flex>
  )
}

export default ItemListContainer
