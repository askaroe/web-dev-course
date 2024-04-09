import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly _domain = 'http://127.0.0.1:8000/';
  private readonly _url = this._domain + 'products/hello/';
  
  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    return this.http.get<Observable<any>>(this._url);
  }
}
