import {Injectable} from '@angular/core';
import {CategoryService} from './category.service';
import {Category} from '../Models/Category';

@Injectable({
  providedIn: 'root',
})
export class DefaultCategoryService extends CategoryService<Category> {
  constructor () {
    super(Category);
    this.collectionUrl = 'Categories';
  }
}
