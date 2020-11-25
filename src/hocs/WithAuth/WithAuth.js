import React, { useEffect, useState } from 'react'
import useAuth from 'hooks/useAuth'
import { Redirect } from 'react-router-dom'
import useIsMounted from 'hooks/useIsMounted'

const WithAuth = (WrappedComponent) => {
  const Component = (props) => {
    const { authenticated } = useAuth()
    const isMounted = useIsMounted()
    const [ready, setReady] = useState(false)

    useEffect(() => {
      if (isMounted.current) {
        setReady(() => true)
      }
    }, [authenticated, isMounted])

    if (!ready) {
      return <h1>Loading...</h1>
    }

    if (!authenticated) {
      return <Redirect to={{ pathname: '/dashboard/login' }} />
    }

    return <WrappedComponent {...props} />
  }

  Component.displayName = 'withAuth'

  return Component
}

export default WithAuth
