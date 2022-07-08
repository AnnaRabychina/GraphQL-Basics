import { userResolver } from './modules/users/resolvers/users.resolver.js';

export const appResolvers = {
  Query: {
    ...userResolver.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
  }
}