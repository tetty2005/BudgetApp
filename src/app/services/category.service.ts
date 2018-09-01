import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoryModel } from '../CategoryModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  public url = 'https://ab641ac6.ngrok.io/api/categories';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.url);
  }

  create(category: CategoryModel):Observable<CategoryModel> {
    return this.http.post<CategoryModel>(this.url, category);
  }

  delete(category: CategoryModel):Observable<CategoryModel> {
    let url = this.url + '/' + category.id;
    return this.http.delete<CategoryModel>(url);
  }
}
