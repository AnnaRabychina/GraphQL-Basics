export const trackResolver = {
  Query: {
    track: async (_, { id }, { dataSources }) => {
      return dataSources.trackService.getTrackById(id);
    },
    tracks: async (_, {limit, offset}, { dataSources }) => { 
      return dataSources.trackService.getTracks(limit, offset);
    }
  },
  
    Mutation: {
    createTrack: async (_, track, { dataSources }) => {
      return dataSources.trackService.createTrack(track);
    },
    updateTrack: async (_, {id, title, albumId, bandsIds, artistsIds, duration, released, genresIds}, { dataSources }) => {
      return dataSources.trackService.updateTrack(id, {title, albumId, bandsIds, artistsIds, duration, released, genresIds});
    },
    deleteTrack: async (_, {id}, { dataSources }) => {
      return dataSources.trackService.deleteTrack(id);
    }
  },

  Track: {
    bands: async (parent, _, { dataSources }) => {
      const bands = parent.bandsIds.map(id => dataSources.bandService.getBandById(id));
      return bands;
    },
    artists: async (parent, _, { dataSources }) => {
      const artists = parent.artistsIds.map(id => dataSources.artistService.getArtistById(id));
      return artists;
    },
    genres: async (parent, _, { dataSources }) => {
      const genres = parent.genresIds.map(id => dataSources.genreService.getGenreById(id));
      return genres;
    },
    album: async (parent, _,  {dataSources}) =>{
      const album = dataSources.albumService.getAlbumById(parent.albumId);
      return album;
    }
  }
}