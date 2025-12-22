import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { ShoppingListService } from './shopping-list-service';
import { MockProvider } from 'ng-mocks';
import { HttpService } from '../http/http-service';
import { of } from 'rxjs';

describe('ShoppingListService', () => {
  let spectator: SpectatorService<ShoppingListService>;
  const createService = createServiceFactory({
    service: ShoppingListService,
    providers: [MockProvider(HttpService, {
      get: jest.fn().mockReturnValue(of([]))
    })]
  });

  beforeEach(() => spectator = createService());

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  describe('getShoppingList', () => {
    it('should call HttpService.get with the correct endpoint', () => {
      const httpService = spectator.inject(HttpService);
      spectator.service.getShoppingList().subscribe();
      expect(httpService.get).toHaveBeenCalledWith('shopping-list');
    });
  });
});
