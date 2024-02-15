"use client"
import { useState } from "react"
import Link from "next/link"

export const AuthLayout = ({ children }: LayoutProps) =>{

    const [input, setInput] = useState('')
    return (
        <div style={{
            marginBlock: '.5rem'
        }}>
            <ul>
                {
                    links.map((link, index) =>(
                        <li key={index}>
                            <Link href={`/${link.pathName}`}>{link.displayName}</Link>
                        </li>
                    ))
                }
            </ul>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

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

const links = [
    {
        pathName: 'login',
        displayName: 'Login'
    },
    {
        pathName: 'register',
        displayName: 'Register'
    },
    {
        pathName: 'forgot-password',
        displayName: 'Forgot Password'
    },
    
]

interface LayoutProps{
    children: React.ReactNode
}

export default AuthLayout