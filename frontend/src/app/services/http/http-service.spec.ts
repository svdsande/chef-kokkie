import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator/jest';
import { HttpService } from './http-service';
import { environment } from '../../../environments/environment';

describe('HttpService', () => {
  let spectator: SpectatorHttp<HttpService>;
  const createHttp = createHttpFactory(HttpService);

  const endpoint = 'test-endpoint';
  const url = `${environment.API_URL}/${endpoint}`;
  const data = { key: 'value' };

  beforeEach(() => spectator = createHttp());

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  describe('get', () => {
    it('should call HttpClient.get with the correct URL', () => {
      spectator.service.get(endpoint).subscribe();
      spectator.expectOne(url, HttpMethod.GET);
    });
  });

  describe('post', () => {
    it('should call HttpClient.post with the correct URL', () => {
      spectator.service.post(endpoint, data).subscribe();
      const req = spectator.expectOne(url, HttpMethod.POST);
      expect(req.request.body).toEqual(data);
    });
  });

  describe('put', () => {
    it('should call HttpClient.put with the correct URL', () => {
      spectator.service.put(endpoint, data).subscribe();
      const req = spectator.expectOne(url, HttpMethod.PUT);
      expect(req.request.body).toEqual(data);
    });
  });

  describe('delete', () => {
    it('should call HttpClient.delete with the correct URL', () => {
      spectator.service.delete(endpoint).subscribe();
      spectator.expectOne(url, HttpMethod.DELETE);
    });
  });
});
