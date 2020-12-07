import { get } from 'config/api'

export const BlogStatisticService = {
  index: (status = '') => get(`/statistics/blogs?status=${status}`)
}
