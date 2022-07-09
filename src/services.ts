import { userService } from './modules/users/services/users.service.js';
import { genreService } from './modules/genres/services/genres.service.js';

export const appServices = {
    userService: new userService(),
    genreService: new genreService()
  }