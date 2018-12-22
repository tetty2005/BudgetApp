import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {CategoryService} from './category.service';

@Injectable({
  providedIn: 'root',
})
export class UserCategoryService extends CategoryService {

  constructor(private authService: AuthService) {
    super();
  }

  getCollectionUrl () {
    if (!this.collectionUrl) {
      const user = this.authService.getUser();

      this.collectionUrl = 'Users/' + user.id + '/Categories';
    }

    return this.collectionUrl;
  }
}
