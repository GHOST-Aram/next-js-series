import { notFound } from 'next/navigation'

const HomeDetails = ({ params }: HomeParams) => {

    if(Number(params.homeId) && Number(params.homeId) > 1000){
        return notFound()
    }
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