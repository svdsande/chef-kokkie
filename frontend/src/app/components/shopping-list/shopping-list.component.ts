import { Component, computed, inject, signal } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list/shopping-list-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatListModule, MatListOption } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-shopping-list',
  imports: [MatListModule, MatIcon, MatButtonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  private readonly shoppingListService = inject(ShoppingListService);
  private readonly groceries = toSignal(this.shoppingListService.getShoppingList(), { initialValue: [] });

  readonly activeGroceries = computed(() => this.groceries().filter(grocery => !grocery.crossed_off));
  readonly crossedOffGroceries = computed(() => this.groceries().filter(grocery => grocery.crossed_off));
  readonly numberOfCrossedOffGroceries = computed(() => this.crossedOffGroceries().length);

  expandCrossedOffGroceries = signal(true);

  groceriesChanged(groceryOptions: MatListOption[]) {
    this.shoppingListService.crossOffItem(groceryOptions[0].value.name).subscribe(() => {
      this.shoppingListService.refresh();
    });
  }

  toggleExpandCrossedOffGroceries() {
    this.expandCrossedOffGroceries.set(!this.expandCrossedOffGroceries());
  }

  deleteGrocery(item: string) {
    this.shoppingListService.removeItem(item).subscribe(() => {
      this.shoppingListService.refresh();
    });
  }
}
