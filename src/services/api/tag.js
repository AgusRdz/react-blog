import { get } from 'config/api'

export const TagService = {
  index: () => get('/tags')
}
