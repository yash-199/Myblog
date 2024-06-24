import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)

    // Safely access the auth status with a default value
    const authStatus = useSelector(state => state.auth?.status)

    useEffect(() => {
        if (authStatus === undefined) {
            // Handle the case where authStatus is undefined
            console.error("Auth status is undefined")
            setLoader(false)
            return
        }

        if (authentication) {
            if (authStatus !== true) {
                navigate("/login")
            }
        } else {
            if (authStatus !== false) {
                navigate("/")
            }
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}
