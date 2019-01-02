import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {CategoryService} from './category.service';
import {UserCategoryService} from './user-category.service';
import {Category} from '../Models/Category';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MonthCategoryService extends CategoryService {

  constructor(private authService: AuthService,
              private userCategoryService: UserCategoryService) {
    super();
  }

  getCollectionUrl () {
    if (!this.collectionUrl) {
      const user = this.authService.getUser();

      this.collectionUrl = 'Users/' + user.id + '/Categories';
    }

    return this.collectionUrl;
  }

  getAvailable(): Observable<Category[]> {
    return Observable.create((observer) => {
      const available: Category[] = [];

      this.userCategoryService.getAll().subscribe((userCategories: Category[]) => {
        userCategories.forEach((category) => {
          available.push(category);
        });
        observer.next(available);
      });
    });
  }
}
