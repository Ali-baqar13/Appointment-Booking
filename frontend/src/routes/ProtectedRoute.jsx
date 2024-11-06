import React from 'react'
import { useContext } from 'react'
import { authContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children,allowedRoles}) => {
    // const navigate=useNavigate()
    const {token,role}=useContext(authContext)
    const isAllowed=allowedRoles.includes(role)
    const accecesibleRoute=token && isAllowed ? children:<Navigate to="/login" replace={true}/>
  return accecesibleRoute;
}

export default ProtectedRoute