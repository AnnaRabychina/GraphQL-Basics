import { userResolver } from './modules/users/resolvers/users.resolver.js';
import { genreResolver } from './modules/genres/resolvers/genres.resolver.js';
import { bandResolver } from './modules/bands/resolvers/bands.resolver.js';
import { artistResolver } from './modules/artists/resolvers/artists.resolver.js';
import { trackResolver } from './modules/tracks/resolvers/tracks.resolver.js';
import { albumResolver } from './modules/albums/resolvers/albums.resolver.js';

export const appResolvers = {
  Query: {
    ...userResolver.Query,
    ...genreResolver.Query,
    ...bandResolver.Query,
    ...artistResolver.Query,
    ...trackResolver.Query,
    ...albumResolver.Query
  },
  Mutation: {
    ...userResolver.Mutation,
    ...genreResolver.Mutation,
    ...bandResolver.Mutation,
    ...artistResolver.Mutation,
    ...trackResolver.Mutation,
    ...albumResolver.Mutation
  },
  Band: {
    ...bandResolver.Band
  },
  Artist: {
    ...artistResolver.Artist
  },
  Member: {
    ...bandResolver.Member
  },
  Track: {
    ...trackResolver.Track
  },
  Album: {
    ...albumResolver.Album
  }
}