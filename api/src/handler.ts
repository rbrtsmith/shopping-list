import {
  APIGatewayProxyResult,
  APIGatewayProxyEvent,
  Context as LambdaContext,
} from 'aws-lambda'
import { ApolloServer } from 'apollo-server-lambda'
import { resolvers } from './resolvers'
import { typeDefs } from './type-defs'

const apolloAdapter = async (
  server: ApolloServer,
  event: APIGatewayProxyEvent,
  context: LambdaContext,
): Promise<APIGatewayProxyResult> =>
  new Promise((resolve, reject) => {
    const apolloHandler = server.createHandler()

    apolloHandler(event, context, (error, result) => {
      if (error) {
        reject(error)
      } else if (!result) {
        reject(new Error('Missing result'))
      } else {
        resolve(result)
      }
    })
  })

export const handler = async (
  event: APIGatewayProxyEvent,
  context: LambdaContext,
) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  })

  return apolloAdapter(server, event, context).catch(error => {
    return {
      statusCode: 500,
      body: `Internal server error: ${error}`,
    }
  })
}
