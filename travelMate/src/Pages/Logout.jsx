import React, { useEffect } from 'react'
import { useAuth } from '../Store/Auth'
import { Navigate } from 'react-router-dom'
function Logout() {
  const { logOutUser } = useAuth()
  useEffect(() => {
    logOutUser();

  }, [logOutUser])
  return <Navigate to='/tour' />
}

export default Logout