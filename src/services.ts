import { userService } from './modules/users/services/users.service.js';

export const appServices = {
    userService: new userService(),
  }