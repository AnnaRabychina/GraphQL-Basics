import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class genreService extends RESTDataSource {

  constructor() {
   super();
   this.baseURL = process.env.GENRES_URL;
  }

  protected willSendRequest(request: RequestOptions): void | Promise<void> {
    if (this.context.token) {
      request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }
  }
  
  async getGenres(limit = 5, offset = 0): Promise<any> {
    const data = await this.get('', { limit: limit, offset: offset });
    return data.items; 
  }

  async getGenreById(id: string): Promise<any> {
    return await this.get(`/${id}`);
  }

  async createGenre(genre): Promise<any> {
    const data = await this.post('', {
      name: genre.name,
      description: genre.description,
      country: genre.country,
      year: genre.year
    });
    return data;
  }

  async updateGenre(id: string, genre): Promise<any> {
    const data = await this.put(`/${id}`, {
      name: genre.name,
      description: genre.description,
      country: genre.country,
      year: genre.year
    });
    return data;
  }

  async deleteGenre(id: string): Promise<any> {
    return await this.delete(`/${id}`);
  }
}