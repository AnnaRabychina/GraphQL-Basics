import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class artistService extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_URL;
  }

  protected willSendRequest(request: RequestOptions): void | Promise<void> {
    if (this.context.token) {
      request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }
  }

  async getArtists(limit = 5, offset = 0): Promise<any> {
    const data = await this.get('', { limit: limit, offset: offset });
    return data.items; 
  }

  async getArtistById(id: string): Promise<any> {
    return await this.get(`/${id}`);
  }

  async createArtist(artist): Promise<any> {
    const data = await this.post('', artist);
    return data;
  }

  async updateArtist(id: string, artist): Promise<any> {
    return await this.put(`/${id}`, {...artist});
  }

  async deleteArtist(id: string): Promise<any> {
    return await this.delete(`/${id}`);
  }

}

