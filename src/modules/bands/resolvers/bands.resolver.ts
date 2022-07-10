export const bandResolver = {
  Query: {
    band: async (_, { id }, { dataSources }) => {
      return dataSources.bandService.getBandById(id);
    },
    bands: async (_, {limit, offset}, { dataSources }) => { 
      return dataSources.bandService.getBands(limit, offset);
    }
  },
  
  Mutation: {
    createBand: async (_, band, { dataSources }) => {
      return dataSources.bandService.createBand(band);
    },
    updateBand: async (_, {id, name, origin, website, members, genresIds}, { dataSources }) => {
      return dataSources.bandService.updateBand(id, {name, origin, website, members, genresIds});
    },
    deleteBand: async (_, {id}, { dataSources }) => {
      return dataSources.bandService.deleteBand(id);
    }
  },

  Band: {
    genres: async (parent, _, { dataSources }) => {
      const genres = parent.genresIds.map(id => dataSources.genreService.getGenreById(id));
      return genres;
    }
  },

  Member: {
    artist: async (parent, _, { dataSources }) => {
      const artist = dataSources.artistService.getArtistById(parent.artistId);
      return artist;
    }
  }
}
