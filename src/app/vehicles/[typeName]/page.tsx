import { Metadata } from "next"

export const generateMetadata = ( { params }: Props ): Metadata =>{
	return {
		title: `Vehicles | ${params.typeName}`
	}
}

const VehicleType = ({ params }: Props) => {
    return (
		<div>
			<h1>VehicleType {params.typeName}</h1>
			<ul>
				<li>{params.typeName} vehicle 1</li>
				<li>{params.typeName} vehicle 2</li>
				<li>{params.typeName} vehicle 3</li>
			</ul>
		</div>
    )
}

type Props = {
	params: {
		typeName: string
	}
}

export default VehicleType