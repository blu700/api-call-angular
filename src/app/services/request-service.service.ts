import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { Homes } from 'app/common/classes/homes';
import { NewUser } from 'app/common/classes/new-user';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private baseUrl = 'http://localhost:4200/api/'
  product: Product[] = []
  private users = 'users'
  private homes = 'homes'
  private addUser = 'users/add'

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + this.users)
  }

  getHomes(): Observable<Homes[]> {
    return this.http.get<Homes[]>(this.baseUrl + this.homes)
  }

  addUserToTable(NewUser: NewUser): Observable<NewUser> {
    return this.http.post<NewUser>(this.baseUrl + this.addUser, NewUser)
  }
}
