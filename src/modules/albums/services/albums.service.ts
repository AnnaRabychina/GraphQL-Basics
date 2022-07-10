import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class albumService extends RESTDataSource {

    constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL;
  }

  protected willSendRequest(request: RequestOptions): void | Promise<void> {
    if (this.context.token) {
      request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }
  }

  async getAlbums(limit = 5, offset = 0): Promise<any> {
    const data = await this.get('', { limit: limit, offset: offset });
    return data.items; 
  }

  async getAlbumById(id: string): Promise<any> {
    return await this.get(`/${id}`);
  }

  async createAlbum(album): Promise<any> {
    const data = await this.post('', album);
    return data;
  }

  async updateAlbum(id: string, album): Promise<any> {
    return await this.put(`/${id}`, {...album});
  }

  async deleteAlbum(id: string): Promise<any> {
    return await this.delete(`/${id}`);
  }
}