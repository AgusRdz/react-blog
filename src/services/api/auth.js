import { post } from 'config/api'

export const Auth = {
  login: (params) => post('/login', params)
}
