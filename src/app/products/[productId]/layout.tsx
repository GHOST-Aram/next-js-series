export default function ProductDetailsLayout( { children }: LayoutProps){
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