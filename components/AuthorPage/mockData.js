import { authors } from '../Authors/mockData'

export const getAuthor = slug => {
  return authors.find(item => item.slug === slug)
}
