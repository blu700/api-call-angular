import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/classes/product';
import { Homes } from 'app/common/classes/homes';
import { NewUser } from 'app/common/classes/new-user';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  

  product: Product[] = []

  private baseUrl = 'http://localhost:4200/api/'
  private users = 'users'
  private homes = 'homes'
  private addUser = 'users/add'
  private editUser = 'users/edit/'
  private editCurrent = 'edit-existing'

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

  // create method for getting data from user
  getUserData(userId: String | null): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + this.editUser + userId)
  }

  editCurrentUser(User: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + this.editCurrent, User)
  }
}
