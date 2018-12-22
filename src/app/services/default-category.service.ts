import {Injectable} from '@angular/core';
import {CategoryService} from './category.service';

@Injectable({
  providedIn: 'root',
})
export class DefaultCategoryService extends CategoryService {
  constructor () {
    super();
    this.collectionUrl = 'Categories';
  }
}
