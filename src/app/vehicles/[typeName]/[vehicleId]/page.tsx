import React from 'react'

const VehicleDetails = ({ params }: VehicleDetailParams) => {
    return (
        <h1>Details deatils for vehicle { params.vehicleId  }</h1>
    )
}

interface VehicleDetailParams{
    params: {
        vehicleId: string
    }
}

export default VehicleDetails