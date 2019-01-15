import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {CategoryService} from './category.service';
import {Category} from '../Models/Category';

@Injectable({
  providedIn: 'root',
})
export class UserCategoryService extends CategoryService<Category> {

  constructor(private authService: AuthService) {
    super(Category);
  }

  getCollectionUrl () {
    if (!this.collectionUrl) {
      const user = this.authService.getUser();

      this.collectionUrl = 'Users/' + user.id + '/Categories';
    }

    return this.collectionUrl;
  }
}
