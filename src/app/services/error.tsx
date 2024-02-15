"use client"
import './style.css'
const ErrorBoundary = ({ error }:{ error: Error}) =>{
    return(
        <h1 className="text-red-700 text-center text-3xl">{error.message}</h1>
    )
}

export default ErrorBoundary