import { Metadata } from "next"

export const metadata:Metadata = {
    title: 'Vehicles',
    description: 'Vehicles for sale'
}

const Vehicles = () => {
  return (
    <div>
        <h1>Vehicles Types</h1>
        <ul>
            <li>Sedans</li>
            <li>Hatchbacks</li>
            <li>SUVs</li>
        </ul>
    </div>
  )
}

export default Vehicles