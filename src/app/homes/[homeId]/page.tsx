"use client"
import { notFound, useRouter } from 'next/navigation'

const HomeDetails = ({ params }: HomeParams) => {
    const navigator = useRouter()
    if(Number(params.homeId) && Number(params.homeId) > 1000){
        return notFound()
    }
    return (
        <div>
            <h1>HomeDetails { params.homeId } </h1>
            <button 
                style={{ 
                    paddingInline: '1rem',
                    paddingBlock: '.25rem',
                    color: 'white',
                    backgroundColor: '#333ddd',
                }}

                onClick={() => {
                    navigator.push('/place-order')
                }}
            >
                Buy Now
            </button>
            <button 
                style={{ 
                    paddingInline: '1rem',
                    paddingBlock: '.25rem',
                    color: 'white',
                    backgroundColor: '#333ddd',
                }}

                onClick={() => {
                    navigator.back()
                }}
            >
                Go Back to Listings
            </button>
            <button 
                style={{ 
                    paddingInline: '1rem',
                    paddingBlock: '.25rem',
                    color: 'white',
                    backgroundColor: '#333ddd',
                }}

                onClick={() => {
                    navigator.replace('/')
                }}
            >
                Finish
            </button>

        </div>
    )
}

interface HomeParams{
    params:{
        homeId: string
    }
}

export default HomeDetails