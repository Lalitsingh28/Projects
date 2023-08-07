import React from 'react'
import ProductList from '../../productList/ProductList'
import Navbar from '../navbar/Navbar'
function Home() {
  return (
    <div>
        <Navbar>
            <ProductList></ProductList>
        </Navbar>
    </div>
  )
}

export default Home