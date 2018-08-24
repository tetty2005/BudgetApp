import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoryModel } from './CategoryModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  public url = 'http://94f1906b.ngrok.io/api/categories';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.url);
  }

  create(category: CategoryModel):Observable<CategoryModel[]> {
    return this.http.post<CategoryModel>(this.url, category);
  }

  delete(category: CategoryModel):Observable<CategoryModel[]> {
    console.log(category);
    let url = this.url + '/' + category.id;
    return this.http.delete<CategoryModel>(url);
  }
}