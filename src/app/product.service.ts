import { Product } from './models/product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getAllProduct(): Observable<Product[]> {
    const p1 = new Product('01', 'Name 01', 100.0, 2);
    const p2 = new Product('02', 'Name 02', 200.5, 3);
    const p3 = new Product('03', 'Name 03', 300.75, 4);
    const p4 = new Product('04', 'N Name 04', 1300.734, 5);
    return of([p1, p2, p3, p4]); // method of อยู่ใน rxjs
    // return this.http.get<Product[]>('http://165.22.255.58:3000/products');
  }
}
