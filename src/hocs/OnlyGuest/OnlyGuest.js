import React from 'react'
import useAuth from 'hooks/useAuth'
import { Redirect } from 'react-router-dom'

const OnlyGuest = (WrappedComponent) => {
  const Component = (props) => {
    const { authenticated } = useAuth()

    if (authenticated) {
      return <Redirect to={{ pathname: '/dashboard' }} />
    }

    return <WrappedComponent {...props} />
  }

  Component.displayName = 'onlyGuest'

  return Component
}

export default OnlyGuest
