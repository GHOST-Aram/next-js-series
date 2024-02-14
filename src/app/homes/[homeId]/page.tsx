import React from 'react'

const HomeDetails = ({ params }: HomeParams) => {
  return (
    <div>HomeDetails { params.homeId }</div>
  )
}

interface HomeParams{
    params:{
        homeId: string
    }
}

export default HomeDetails