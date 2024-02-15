export default function ProductDetailsLayout( { children }: LayoutProps){

    const random = generateRandomNumber(2)

    if(random === 1)
      throw new Error('Error Loading Product Details')

    return(
        <div>
            {children}
            <h2>Similar Products</h2>
        </div>
    )
}

interface LayoutProps{
    children: React.ReactNode
}

const generateRandomNumber = (count: number): number =>{
    return Math.floor(Math.random() * count)
}