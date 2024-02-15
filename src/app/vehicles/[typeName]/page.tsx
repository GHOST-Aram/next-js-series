import React from 'react'

const VehicleType = ({ params }: VehicleTypeProps) => {
    return (
		<div>
			<h1>VehicleType {params.typeName}</h1>
			<ul>
				<li>{params.typeName} 1</li>
				<li>{params.typeName} 2</li>
				<li>{params.typeName} 3</li>
			</ul>
		</div>
    )
}

interface VehicleTypeProps{
	params: {
		typeName: string
	}
}

export default VehicleType