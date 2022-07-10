import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class bandService extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = process.env.BANDS_URL;
  }

  protected willSendRequest(request: RequestOptions): void | Promise<void> {
    if (this.context.token) {
      request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }
  }

  async getBands(limit = 5, offset = 0): Promise<any> {
    const data = await this.get('', { limit: limit, offset: offset });
    return data.items; 
  }

  async getBandById(id: string): Promise<any> {
    return await this.get(`/${id}`);
  }

  async createBand(band): Promise<any> {
    const data = await this.post('', band);
    return data;
  }

  async updateBand(id: string, band): Promise<any> {
    return await this.put(`/${id}`, {...band});
  }

  async deleteBand(id: string): Promise<any> {
    return await this.delete(`/${id}`);
  }
}