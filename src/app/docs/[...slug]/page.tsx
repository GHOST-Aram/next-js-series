import React from 'react'

const DocFeatures = ({ params }: SlugParams) => {
    if(params.slug.length === 1){
        return (
            <h1>Viewing docs for <span className='text-green-500'>{params.slug[0]}</span> feature</h1>
        )
    }

    if(params.slug.length === 2)
        return (
            <h1>
                Viewing docs for 
                <span className='text-green-500'> {params.slug[0]}</span> feature
                and <span> {params.slug[1]} concept</span>
            </h1>
        )

}

interface SlugParams{
    params: {
        slug: string[]
    }
}

export default DocFeatures