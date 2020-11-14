import axios from 'axios'

const apiClient = axios.create({ baseURL: process.env.REACT_APP_API_URL })

apiClient.interceptors.request.use(
  (config) => {
    return {
      ...config
      // headers: {}
    }
  },
  (error) => Promise.reject(error)
)

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => error.response.data
)

const { get, post, put, delete: destroy } = apiClient

export { get, post, put, destroy }