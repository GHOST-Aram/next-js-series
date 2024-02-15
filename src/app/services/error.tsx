"use client"
import './style.css'
const ErrorBoundary = ({ error, reset }:{ error: Error, reset: () => void}) =>{
    return(
        <>
            <h1 className="text-red-700 text-center text-3xl">{error.message}</h1>
            <button 
                onClick={reset}
            className="px-8 py-2 rounded-md text-slate-800 bg-slate-300 border-solid m-auto">
                Try Again
            </button>
        </>
    )
}

export default ErrorBoundary