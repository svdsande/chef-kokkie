import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { ShoppingListComponent } from './shopping-list.component';
import { MockProvider } from 'ng-mocks';
import { ShoppingListService } from '../../services/shopping-list/shopping-list-service';
import { of } from 'rxjs';

describe('ShoppingListComponent', () => {
  let spectator: Spectator<ShoppingListComponent>;
  const createComponent = createComponentFactory({
    component: ShoppingListComponent,
    providers: [MockProvider(ShoppingListService, {
      getShoppingList: jest.fn().mockReturnValue(of([]))
    })]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });
});

