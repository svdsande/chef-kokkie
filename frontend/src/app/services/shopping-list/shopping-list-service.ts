import { inject, Injectable } from '@angular/core';
import { HttpService } from '../http/http-service';
import { Observable, startWith, Subject, switchMap } from 'rxjs';
import { Grocery } from '../../interfaces/grocery';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private readonly httpService = inject(HttpService);
  private readonly endpoint = 'shopping-list';
  private readonly refresh$ = new Subject<void>();

  getShoppingList(): Observable<Grocery[]> {
    return this.refresh$.pipe(
      startWith(void 0),
      switchMap(() => this.httpService.get<Grocery[]>(this.endpoint))
    );
  }

  refresh(): void {
    this.refresh$.next();
  }

  addItem(item: string): Observable<string[]> {
    return this.httpService.post(this.endpoint, { item });
  }

  removeItem(item: string): Observable<void> {
    return this.httpService.delete(`${this.endpoint}/${item}`);
  }

  crossOffItem(item: string): Observable<void> {
    return this.httpService.put(`${this.endpoint}/${item}`);
  }
}
