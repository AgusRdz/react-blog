import { lazy } from 'react'

const SuspenseResolver = (component, delay = 2000) => {
  return lazy(async () => {
    await new Promise((resolve) => setTimeout(resolve, delay))

    return import(`../${component}`) // eslint-disable-line import/no-dynamic-require
  })
}

export default SuspenseResolver
