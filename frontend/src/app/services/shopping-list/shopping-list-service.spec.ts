import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { ShoppingListService } from './shopping-list-service';
import { MockProvider } from 'ng-mocks';
import { HttpService } from '../http/http-service';
import { of } from 'rxjs';
import { Grocery } from '../../interfaces/grocery';

describe('ShoppingListService', () => {
  let spectator: SpectatorService<ShoppingListService>;

  const groceries: Grocery[] = [
    { name: 'Apples', crossed_off: false },
    { name: 'Bananas', crossed_off: true }
  ];

  const createService = createServiceFactory({
    service: ShoppingListService,
    providers: [MockProvider(HttpService, {
      get: jest.fn().mockReturnValue(of(groceries)),
      post: jest.fn().mockReturnValue(of(void 0)),
      delete: jest.fn().mockReturnValue(of(void 0)),
      put: jest.fn().mockReturnValue(of(void 0))
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

    it('should return an observable of Grocery array', (done) => {
      spectator.service.getShoppingList().subscribe((data) => {
        expect(data).toEqual(groceries);
        done();
      });
    });
  });

  describe('refresh', () => {
    it('should trigger a refresh of the shopping list', () => {
      const httpService = spectator.inject(HttpService);
      httpService.get.mockClear();
      spectator.service.getShoppingList().subscribe();
      spectator.service.refresh();
      expect(httpService.get).toHaveBeenCalledTimes(2);
    });
  });

  describe('addItem', () => {
    it('should call HttpService.post with the correct endpoint and payload', () => {
      const httpService = spectator.inject(HttpService);
      const newItem = 'Oranges';
      spectator.service.addItem(newItem).subscribe();
      expect(httpService.post).toHaveBeenCalledWith('shopping-list', { item: newItem });
    });
  });

  describe('removeItem', () => {
    it('should call HttpService.delete with the correct endpoint', () => {
      const httpService = spectator.inject(HttpService);
      const itemToRemove = 'Apples';
      spectator.service.removeItem(itemToRemove).subscribe();
      expect(httpService.delete).toHaveBeenCalledWith(`shopping-list/${itemToRemove}`);
    });
  });

  describe('crossOffItem', () => {
    it('should call HttpService.put with the correct endpoint', () => {
      const httpService = spectator.inject(HttpService);
      const itemToCrossOff = 'Bananas';
      spectator.service.crossOffItem(itemToCrossOff).subscribe();
      expect(httpService.put).toHaveBeenCalledWith(`shopping-list/${itemToCrossOff}`);
    });
  });
});
