import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class trackService extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = process.env.TRACKS_URL;
  }

  protected willSendRequest(request: RequestOptions): void | Promise<void> {
    if (this.context.token) {
      request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }
  }

  async getTracks(limit = 5, offset = 0): Promise<any> {
    const data = await this.get('', { limit: limit, offset: offset });
    return data.items; 
  }

  async getTrackById(id: string): Promise<any> {
    return await this.get(`/${id}`);
  }

  async createTrack(track): Promise<any> {
    const data = await this.post('', track);
    return data;
  }

  async updateTrack(id: string, track): Promise<any> {
    return await this.put(`/${id}`, {...track});
  }

    async deleteTrack(id: string): Promise<any> {
    return await this.delete(`/${id}`);
  }

}