import { post } from 'config/api'

export const AuthService = {
  login: (params) => post('/auth/login', params)
}
