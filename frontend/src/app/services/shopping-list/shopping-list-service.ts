import { inject, Injectable } from '@angular/core';
import { HttpService } from '../http/http-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private readonly httpService = inject(HttpService);
  private readonly endpoint = 'shopping-list';

  getShoppingList(): Observable<string[]> {
    return this.httpService.get(this.endpoint);
  }
}
