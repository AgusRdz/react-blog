import { lazy } from 'react'

const SuspenseResolver = (component, delay = 2000) => {
  return lazy(async () => {
    await new Promise((resolve) => setTimeout(resolve, delay))
    return import(`../${component}`)
  })
}

export default SuspenseResolver
