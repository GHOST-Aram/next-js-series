import { Metadata } from "next"

export const generateMetadata = ( { params }: VehicleDetailProps ): Metadata =>{
	return {
		title: `Vehicles | ${params.vehicleId}`
	}
}

const VehicleDetails = ({ params }: VehicleDetailProps) => {
    return (
        <h1>Details deatils for vehicle { params.vehicleId  }</h1>
    )
}

type VehicleDetailProps = {
    params: {
        vehicleId: string
    }
}

export default VehicleDetails