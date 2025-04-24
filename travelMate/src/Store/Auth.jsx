import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

  const storeToken = (token) => {
    return localStorage.setItem('token', token)
  }
  const [stoken, setStoken] = useState(localStorage.getItem('token'))
  const [user, setUser] = useState('')
  const isLoggedIn = !!stoken;
  const getToken = () => {
    if (isLoggedIn) {
      return stoken
    }
    else {
      return null;
    }

  }
  const logOutUser = () => {
    setStoken('')
    return localStorage.removeItem('token')

  }
  const getUser = async () => {
    const response = await fetch('http://localhost:5000/api/auth/user', {
      method: 'GET',
      headers: { Authorization: `Bearer ${stoken}` }
    })
    const data = await response.json()
    if (response.ok) {

      setUser(data.userData)

    }
  }
  useEffect(() => {
    getUser()
  }, [])

  return <AuthContext.Provider value={{ isLoggedIn, storeToken, logOutUser, user, getToken }}>
    {children}
  </AuthContext.Provider>
}
export const useAuth = () => {
  const authValue = useContext(AuthContext);
  return authValue;
}