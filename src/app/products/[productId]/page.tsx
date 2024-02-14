import React from 'react'

const ProductDetails = ( { params }: ProductParams) => {
  return (
    <div>
        <h1>Product Details Page {params.productId}</h1>
    </div>
  )
}

interface ProductParams {
    params: {
        productId: string
    }
}

export default ProductDetails