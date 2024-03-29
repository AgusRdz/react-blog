import { get, post, put, destroy } from 'config/api'

export const User = {
  index: () => get('/users'),
  create: (params) => post('/users', params),
  update: (id, params) => put(`/users/${id}`, params),
  remove: (id) => destroy(`/users/${id}`)
}
