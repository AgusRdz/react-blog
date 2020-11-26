import axios from 'axios'

const apiClient = axios.create({ baseURL: process.env.REACT_APP_API_URL })

apiClient.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(sessionStorage.getItem('session')) || null
    const headers = {
      'Content-Type': 'application/json'
    }

    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`
    }

    return {
      ...config,
      headers
    }
  },
  (error) => Promise.reject(error)
)

apiClient.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const { data } = await apiClient.post('/auth/token/refresh')
      sessionStorage.setItem('session', JSON.stringify(data.accessToken))
      axios.defaults.headers.common.authorization = `Bearer ${data.accessToken}`
      return apiClient(originalRequest)
    }

    if (
      error.response.status === 500 &&
      error.response.data.error.name === 'JsonWebTokenError'
    ) {
      sessionStorage.removeItem('session')
      window.location.href = '/dashboard/login'
    }

    return error.response.data
    // return Promise.reject(error.response.data)
  }
)

const { get, post, put, delete: destroy } = apiClient

export { get, post, put, destroy }
