import React from 'react'
import './App.css'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import 'react-toastify/dist/ReactToastify.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path='/' element={<ItemListContainer title={'Tienda'}/>}/>
        <Route path='/categorias/:categoryId' element={<ItemListContainer title={'Tienda'}/>}></Route>
        <Route path='/producto/:productId' element={<ItemDetailContainer/>}></Route>
        <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>

  )
}

export default App
