import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = () => {
    const loggedInUser = useSelector((state) => state.users.loggedInUser)
  return loggedInUser ? children : <Navigate to={'/login'}/>
}

export default ProtectedRoute
