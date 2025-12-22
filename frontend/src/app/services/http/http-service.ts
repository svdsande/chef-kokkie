import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly httpClient = inject(HttpClient);
  private readonly apiUrl = environment.API_URL;

  get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.httpClient.get<T>(`${this.apiUrl}/${endpoint}`, { params });
  }

  post<T>(endpoint: string, data: unknown, params?: HttpParams): Observable<T> {
    return this.httpClient.post<T>(`${this.apiUrl}/${endpoint}`, data, { params });
  }

  put<T>(endpoint: string, data: unknown, params?: HttpParams): Observable<T> {
    return this.httpClient.put<T>(`${this.apiUrl}/${endpoint}`, data, { params });
  }

  delete<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.httpClient.delete<T>(`${this.apiUrl}/${endpoint}`, { params });
  }
}
