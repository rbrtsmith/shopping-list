import { QueryResolvers } from '../__generated__/types'

export const resolver: NonNullable<
  QueryResolvers['hello']
> = async (): Promise<string> => 'Hello from resolver'
