import { userService } from './modules/users/services/users.service.js';
import { genreService } from './modules/genres/services/genres.service.js';
import { bandService } from './modules/bands/services/bands.service.js';
import { artistService } from './modules/artists/services/artists.service.js';

export const appServices = {
    userService: new userService(),
    genreService: new genreService(),
    bandService: new bandService(),
    artistService: new artistService()
  }