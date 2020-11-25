import { get, post, put, destroy } from 'config/api'

export const BlogService = {
  index: (page = 0) => get(`/blogs?page=${page}`),
  create: (params) => post('/blogs', params),
  update: (id, params) => put(`/blogs/${id}`, params),
  remove: (id) => destroy(`/blogs/${id}`)
}
