import { userResolver } from './modules/users/resolvers/users.resolver.js';
import { genreResolver } from './modules/genres/resolvers/genres.resolver.js';
import { bandResolver } from './modules/bands/resolvers/bands.resolver.js';
import { artistResolver } from './modules/artists/resolvers/artists.resolver.js';


export const appResolvers = {
  Query: {
    ...userResolver.Query,
    ...genreResolver.Query,
    ...bandResolver.Query,
    ...artistResolver.Query
  },
  Mutation: {
    ...userResolver.Mutation,
    ...genreResolver.Mutation,
    ...bandResolver.Mutation,
    ...artistResolver.Mutation
  },
  Band: {
    ...bandResolver.Band
  },
  Artist: {
    ...artistResolver.Artist
  },
  Member: {
    ...bandResolver.Member,
  },
}