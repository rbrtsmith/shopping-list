import { ApolloServer } from 'apollo-server'
import { resolvers } from './resolvers'
import { typeDefs } from './type-defs'

const PORT = process.env.PORT || 4020
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: {
    settings: {
      'request.credentials': 'same-origin',
    },
  },
})

server
  .listen(PORT)
  .then(() => {
    console.log(`Shopping List API running on http://localhost:${PORT}`)
  })
  .catch(error => {
    console.error(error)
  })
