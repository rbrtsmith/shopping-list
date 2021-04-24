import { resolver as hello } from './query/hello'
import { Resolvers } from './__generated__/types'

export const resolvers: Resolvers = {
  Query: {
    hello,
  },
}
