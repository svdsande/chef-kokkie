import { Component, inject } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list/shopping-list-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-shopping-list',
  imports: [],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  private readonly shoppingListService = inject(ShoppingListService);

  shoppingList = toSignal(this.shoppingListService.getShoppingList(), { initialValue: [] });
}
