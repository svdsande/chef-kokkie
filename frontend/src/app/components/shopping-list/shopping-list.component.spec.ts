import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { ShoppingListComponent } from './shopping-list.component';

describe('ShoppingListComponent', () => {
  let spectator: Spectator<ShoppingListComponent>;
  const createComponent = createComponentFactory(ShoppingListComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });
});

