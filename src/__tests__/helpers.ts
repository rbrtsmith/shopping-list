import {
  ApolloServerPluginInlineTraceDisabled,
  GraphQLResponse,
} from 'apollo-server-core'
import { ApolloServer } from 'apollo-server'
import { ApolloServerTestClient, createTestClient } from 'apollo-server-testing'

import { DocumentNode } from 'graphql'
import { Context } from '../types'
import { resolvers } from '../resolvers'
import { typeDefs } from '../type-defs'

type ContextOverrides = Partial<Context>

export const createMockContext = (
  overrides: ContextOverrides = {},
): Context => ({ ...overrides })

export const createClient = (
  contextOverrides: Partial<Context> = {},
): ApolloServerTestClient => {
  const context = { ...createMockContext(), ...contextOverrides }

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    plugins: [ApolloServerPluginInlineTraceDisabled()],
  })

  return createTestClient(server)
}

export const runQuery = async <TVariables>(
  query: string | DocumentNode,
  variables?: TVariables,
  contextOverrides?: Partial<Context>,
): Promise<GraphQLResponse> => {
  const { query: clientQuery } = createClient(contextOverrides)
  return clientQuery({
    query,
    variables,
  })
}
