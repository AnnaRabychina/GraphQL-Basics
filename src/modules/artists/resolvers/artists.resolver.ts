export const artistResolver = {
  Query: {
    artist: async (_, { id }, { dataSources }) => {
      return dataSources.artistService.getArtistById(id);
    },
    artists: async (_, {limit, offset}, { dataSources }) => { 
      return dataSources.artistService.getArtists(limit, offset);
    }
  },
  
    Mutation: {
    createArtist: async (_, artist, { dataSources }) => {
      return dataSources.artistService.createArtist(artist);
    },
    updateArtist: async (_, {id, firstName, secondName, middleName, birthDate, birthPlace, country, bandsIds, instruments}, { dataSources }) => {
      return dataSources.artistService.updateArtist(id, {firstName, secondName, middleName, birthDate, birthPlace, country, bandsIds, instruments});
    },
    deleteArtist: async (_, {id}, { dataSources }) => {
      return dataSources.artistService.deleteArtist(id);
    }
  },

  Artist: {
    bands: async (parent, _, { dataSources }) => {
      const bands = parent.bandsIds.map(id => dataSources.bandService.getBandById(id));
      return bands;
    }
  }
}