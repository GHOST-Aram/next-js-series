export const AuthLayout = ({ children }: LayoutProps) =>{
    return (
        <div>
            {children}
            <div>
                <button style={{ padding: '1rem'}}>
                    Login With Facebook
                </button>
                <button style={{ padding: '1rem'}}>
                    Login With Google
                </button>
            </div>
        </div>
    )
}

interface LayoutProps{
    children: React.ReactNode
}

export default AuthLayout