import Link from 'next/link'
import React from 'react'

const Products = () => {
  return (
    <>
        <h1>Products</h1>
        <ul style={{ display: 'flex', flexDirection: 'column',}}>
            {
                products.map(product =>(
                    <Link key={product.id} href={`/products/${product.id}`}>
                        {product.name}
                    </Link>
                ))
            }
            
        </ul>
    </>
  )
}

const products = [
    {
        id: '43ed34de34de43der4',
        name: 'Desktop'
    },
    {
        id: '43ed34de34de43de78',
        name: 'Cooking Gas'
    },
    {
        id: '43ed34de34de43der3',
        name: 'Table'
    },
    {
        id: '43ed34de34de43der2',
        name: 'Bed'
    },
]

export default Products