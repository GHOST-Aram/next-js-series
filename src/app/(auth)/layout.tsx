"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import './style.css'

export const AuthLayout = ({ children }: LayoutProps) =>{
    const pathName = usePathname()
    const [input, setInput] = useState('')

    
    return (
        <div style={{
            marginBlock: '.5rem'
        }}>
            <ul>
                {
                    links.map((link, index) =>{

                        const isActive = new RegExp(link.pathName).test(pathName)

                        return (
                            <li key={index}>
                                <Link href={`/${link.pathName}`}
                                    className={`font-bold ${isActive ? 'text-blue-700' : 'text-slate-800'}`}
                                >
                                    {link.displayName}
                                </Link>
                            </li>
                        )
                    })
                        
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