import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class userService extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = process.env.USERS_URL;
  }

  async getUserById(id: string): Promise<any> {
    return await this.get(`/${id}`);
  }

  async createUser(user): Promise<any> {
    const data = await this.post('/register', {
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      email: user.email
    });
    return data;
  }

  async login(email: string, password: string): Promise<String> {
    const data = await this.post('/login', {
      email,
      password,
    });
    return data.jwt;
  }
}