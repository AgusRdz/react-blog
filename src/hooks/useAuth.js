import { useEffect, useState } from 'react'

const useAuth = () => {
  const [jwt] = useState(() => sessionStorage.getItem('session') || null)
  const [authenticated, setAuthenticated] = useState(() => false)

  useEffect(() => {
    setAuthenticated(() => jwt !== null)
  }, [jwt])

  return {
    jwt,
    authenticated
  }
}

export default useAuth
