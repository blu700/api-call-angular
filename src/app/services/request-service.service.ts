import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private baseUrl = 'https://random-data-api.com/api/v2/appliances?size='
  product: Product[] = []

  constructor(private http: HttpClient) { }

  getResponse(amount: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + amount)
  }
}
