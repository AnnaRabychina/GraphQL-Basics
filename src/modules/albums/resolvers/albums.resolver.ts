export const albumResolver = {
  Query: {
    album: async (_, { id }, { dataSources }) => { 
      return dataSources.albumService.getAlbumById(id);
    },
    albums: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.albumService.getAlbums(limit, offset);
    }
  },
  
  Mutation: {
    createAlbum: async (_, album, { dataSources }) => {    
      return dataSources.albumService.createAlbum(album);
    },
    updateAlbum: async (_, {id, name, released, artistsIds, bandsIds, trackIds, genresIds, image }, { dataSources }) => {
      return dataSources.albumService.updateAlbum(id, {name, released, artistsIds, bandsIds, trackIds, genresIds, image});
    },
    deleteAlbum: async (_, {id}, { dataSources }) => {
      return dataSources.albumService.deleteAlbum(id);
    }
  },

  Album: {
    artists(parent, _, { dataSources }) {
      const artists = parent.artistsIds.map((id: string) => dataSources.artistService.getArtistById(id));
      return artists;
    },
    bands(parent, _, { dataSources }) {
      const bands = parent.bandsIds.map((id: string) => dataSources.bandService.getBandById(id));
      return bands;
    },
    genres: async (parent, _, { dataSources }) => {
      const genres = parent.genresIds.map((id: string) => dataSources.genreService.getGenreById(id));
      return genres;
    },
    tracks(parent, _, { dataSources }) {
      const tracks = parent.trackIds.map((id: string) => dataSources.trackService.getTrackById(id));
      return tracks;
    }
  }
}