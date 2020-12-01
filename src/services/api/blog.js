import { get, post, put, destroy } from 'config/api'

export const BlogService = {
  index: (page = 0) => get(`/blogs?page=${page}`),
  create: (params) => post('/blogs', params),
  update: (id, params) => put(`/blogs/${id}`, params),
  destroy: (id) => destroy(`/blogs/${id}`),
  edit: (id) => get(`/blogs/${id}`),
  archive: (id) => destroy(`/blogs/${id}/archive`)
}
