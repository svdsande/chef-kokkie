import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { ShoppingListComponent } from './shopping-list.component';
import { MockProvider } from 'ng-mocks';
import { ShoppingListService } from '../../services/shopping-list/shopping-list-service';
import { of } from 'rxjs';
import { Grocery } from '../../interfaces/grocery';
import { MatListOption } from '@angular/material/list';

describe('ShoppingListComponent', () => {
  let spectator: Spectator<ShoppingListComponent>;

  const groceries: Grocery[] = [
    { name: 'Apples', crossed_off: false },
    { name: 'Bananas', crossed_off: true }
  ];

  const createComponent = createComponentFactory({
    component: ShoppingListComponent,
    providers: [MockProvider(ShoppingListService, {
      getShoppingList: jest.fn().mockReturnValue(of(groceries)),
      removeItem: jest.fn().mockReturnValue(of(void 0)),
      refresh: jest.fn(),
      crossOffItem: jest.fn().mockReturnValue(of(void 0))
    })]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the component', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should separate active and crossed off groceries', () => {
    expect(spectator.component.activeGroceries()).toEqual([{ name: 'Apples', crossed_off: false }]);
    expect(spectator.component.crossedOffGroceries()).toEqual([{ name: 'Bananas', crossed_off: true }]);
  });

  it('should count crossed off groceries correctly', () => {
    expect(spectator.component.numberOfCrossedOffGroceries()).toBe(1);
  });

  describe('toggleExpandCrossedOffGroceries', () => {
    it('should toggle the expandCrossedOffGroceries signal', () => {
      spectator.component.expandCrossedOffGroceries.set(true);
      expect(spectator.component.expandCrossedOffGroceries()).toBe(true);

      spectator.component.toggleExpandCrossedOffGroceries();
      expect(spectator.component.expandCrossedOffGroceries()).toBe(false);
    });

    it('should show and hide crossed off groceries', () => {
      expect(spectator.query('.crossed-off-groceries')).toBeTruthy();

      spectator.component.toggleExpandCrossedOffGroceries();
      spectator.detectChanges();

      expect(spectator.query('.crossed-off-groceries')).toBeNull();
    });
  });

  describe('deleteGrocery', () => {
    it('should call removeItem on the service and refresh the list', () => {
      const shoppingListService = spectator.inject(ShoppingListService);
      spectator.component.deleteGrocery('Apples');

      expect(shoppingListService.removeItem).toHaveBeenCalledWith('Apples');
      expect(shoppingListService.refresh).toHaveBeenCalled();
    });
  });

  describe('groceriesChanged', () => {
    it('should cross off the selected grocery and refresh the list', () => {
      const shoppingListService = spectator.inject(ShoppingListService);
      const selectedOption = { value: { name: 'Apples', crossed_off: false } } as MatListOption;

      spectator.component.groceriesChanged([selectedOption]);

      expect(shoppingListService.crossOffItem).toHaveBeenCalledWith('Apples');
      expect(shoppingListService.refresh).toHaveBeenCalled();
    });
  });
});

