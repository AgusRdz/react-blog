import { get } from 'config/api'

export const HomeService = {
  index: (page) => get(`/home?page=${page}`)
}
